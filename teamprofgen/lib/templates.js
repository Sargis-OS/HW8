class Templates {
  renderIntern(intern) {
    const parsedHTML = `<div class="card">
        <div class="card-content has-background-info">
          <div class="media-content">
            <p class="title is-4 has-text-white">${intern.name}</p>
            <p class="subtitle is-6 has-text-white">Intern</p>
          </div>
        </div>
        <div class="card-content">
          <div class="box">
            <div class="p ">ID: ${intern.id}</div>
            <div class="p border">Email: ${intern.email}</div>
            <div class="p border">School: ${intern.school}</div>
          </div>
        </div>
      </div>`;

    return parsedHTML;
  }
  renderManager(manager) {
    const parsedHTML = `<div class="card">
        <div class="card-content has-background-info">
          <div class="media-content">
            <p class="title is-4 has-text-white">${manager.name}</p>
            <p class="subtitle is-6 has-text-white">Manager</p>
          </div>
        </div>
        <div class="card-content">
          <div class="box">
            <div class="p ">ID: ${manager.id}</div>
            <div class="p border">Email: ${manager.email}</div>
            <div class="p border">Office Number: ${manager.officeNumber}</div>
          </div>
        </div>
      </div>`;

    return parsedHTML;
  }
  renderEngineer(engineer) {
    const parsedHTML = `<div class="card">
        <div class="card-content has-background-info">
          <div class="media-content">
            <p class="title is-4 has-text-white">${engineer.name}</p>
            <p class="subtitle is-6 has-text-white">Engineer</p>
          </div>
        </div>
        <div class="card-content">
          <div class="box">
            <div class="p ">ID: ${engineer.id}</div>
            <div class="p border">Email: ${engineer.email}</div>
            <div class="p border">Github: ${engineer.github}</div>
          </div>
        </div>
      </div>`;

    return parsedHTML;
  }
}

module.exports = Templates;
