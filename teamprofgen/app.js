const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Templates = require("./lib/Templates");
const Inquirer = require("inquirer");

const fs = require("fs");

var teamMembers = [];

//Create Objects of team members
const appMenu = async () => {
  // Create Manager object
  const createManager = async () => {
    const answer = await Inquirer.prompt([
      {
        type: "input",
        message: "Enter your name",
        name: "name"
      },
      {
        type: "input",
        message: "Enter your id",
        name: "id"
      },
      {
        type: "input",
        message: "Enter your email",
        name: "email"
      },
      {
        type: "input",
        message: "Enter your office number",
        name: "officeNum"
      }
    ]);
    const manager = await new Manager(
      answer.name,
      answer.id,
      answer.email,
      answer.officeNum
    );
    await teamMembers.push(manager);
  };
  //Prompt for new types of employees
  const createTeam = async () => {
    const prompt = await Inquirer.prompt({
      type: "list",
      messages: "What type of team member do you want to add?",
      choices: ["Engineer", "Intern", "I'm done"],
      name: "member"
    });

    if (prompt.member === "Engineer") {
      await createEngineer();
      await createTeam();
    } else if (prompt.member === "Intern") {
      await createIntern();
      await createTeam();
    } else {
      //Return Array of team member objects
      return teamMembers;
    }
  };
  //Function to create intern object
  async function createIntern() {
    const answer = await Inquirer.prompt([
      {
        type: "input",
        message: "Enter your name",
        name: "name"
      },
      {
        type: "input",
        message: "Enter your id",
        name: "id"
      },
      {
        type: "input",
        message: "Enter your email",
        name: "email"
      },
      {
        type: "input",
        message: "Enter your school",
        name: "school"
      }
    ]);
    const newIntern = await new Intern(
      answer.name,
      answer.id,
      answer.email,
      answer.school
    );

    await teamMembers.push(newIntern);
  }
  //Function to create Engineer Object
  async function createEngineer() {
    const answer = await Inquirer.prompt([
      {
        type: "input",
        message: "Enter your name",
        name: "name"
      },
      {
        type: "input",
        message: "Enter your id",
        name: "id"
      },
      {
        type: "input",
        message: "Enter your email",
        name: "email"
      },
      {
        type: "input",
        message: "Enter your github",
        name: "github"
      }
    ]);
    const newEngineer = await new Engineer(
      answer.name,
      answer.id,
      answer.email,
      answer.github
    );

    await teamMembers.push(newEngineer);
  }

  await createManager();
  await createTeam();
};

const renderHTML = async body => {
  let header = `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      type="text/css"
      href="./node_modules/bulma/css/bulma.css"
    />
    <link rel="stylesheet" type="text/css" href="./main.css" />
  </head>
  <body>
    <div class="hero is-warning">
      <div class="hero-body has-text-centered is-size-3 ">My Team</div>
    </div>
    <div class="cardContainer">`;
  let footer = ` </div>
  </body>
</html>`;

  let final = header + body + footer;
  fs.writeFileSync("index.html", final, "utf-8");
};

const createHTML = employees => {
  const template = new Templates();
  //Render Managers
  let managerArray = employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => template.renderManager(manager));

  //Render Engineers
  let engineerArray = employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => template.renderEngineer(engineer));

  //Render Intern
  let internArray = employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => template.renderIntern(intern));

  const html = [...managerArray, ...engineerArray, ...internArray];
  return html.join("");
};
// let final = render(testDummy);
// renderHTML(final);

const init = async () => {
  const team = await appMenu();
  const html = await createHTML(teamMembers);
  const final = await renderHTML(html);
};

init();
