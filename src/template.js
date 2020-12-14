const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

// template helper code
function generateCard(employee) {

  // template if employee get role mataches manager then get info and generate card. 
  if (employee.getRole() === "Manager") {
    return `<div class="card ">
  <div class="cardheader">
    <span class=" grey-text text-darken-4">${employee.getRole("Manager")}<i class="material-icons right">close</i></span>
  </div>
  <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">${employee.getName("Manager")}<i class="material-icons right">more_vert</i></span>
    <p>${employee.getManagerOffice("Manager")}</p>
    <p>${employee.getId("Manager")}</p>
  </div>
  <div class="card-reveal">
  <p><a href="#">${employee.getEmail("Manager")}</a></p>
    <p></p>
  </div>
</div>
`;
    // if employee get role matches engineer then get info and generate card. 
  } else if (employee.getRole() === "Engineer") {
    return `<div class="card ">
<div class="cardheader">

  <span class=" grey-text text-darken-4">${employee.getRole()}<i class="material-icons right">close</i></span>
</div>
<div class="card-content">
  <span class="card-title activator grey-text text-darken-4">${employee.getName()}<i class="material-icons right">more_vert</i></span>
  <p>${employee.getId()}</p>
</div>
<div class="card-reveal">
<p><a href="#">${employee.getEmail()}</a></p>
<p><a href="#">github.com/${employee.getEngineerGithub()}</a></p>
  
  <p></p>
</div>
</div>
`;
  } else if (employee.getRole() === "Intern") {
    return `<div class="card ">
<div class="cardheader">
  <span class=" grey-text text-darken-4">${employee.getRole()}<i class="material-icons right">close</i></span>
</div>
<div class="card-content">
  <span class="card-title activator grey-text text-darken-4">${employee.getName()}<i class="material-icons right">more_vert</i></span>
  <p>${employee.getInternSchool()}</p>
</div>
<div class="card-reveal">
<p><a href="#">${employee.getEmail()}</a></p>  
  <p></p>
</div>
</div>
`;
  };
}

module.exports = teamMembers => {

  return `<!DOCTYPE html>
  <html lang="en">

    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

          <title>Team Member Sheet</title>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;0,700;1,300;1,600&family=Noto+Sans+JP&display=swap">
              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
                <link rel="stylesheet" type="text/css" href="./style.css">
</head>

                <body>

                  <header class="header">Employee Roster</header>


                  <section>
                    <div class="row" id="card">
                    ${teamMembers.filter((employee) => employee.getRole() === "Manager").map(generateCard())}
                    ${teamMembers.filter((employee) => employee.getRole() === "Engineer").map(generateCard())}
                    ${teamMembers.filter((employee) => employee.getRole() === "Intern").map(generateCard())}
                  </div>
                  </section>



                  <footer class="footer">
                    <p style="text-align: center"> Copyright &copy; 2020-
            <script>document.write(new Date().getFullYear())</script> With Love by Me!!</p>

                  </footer>

                  <script src="https://code.jquery.com/jquery-3.5.1.min.js"
                    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                  <script src="../lib/classes.js"></script>

                </body>

</html>`
};
