// runs the app
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const path = require("path");
const fs = require("fs");


const outputPath = path.join(__dirname, "dist/index.html");
console.log(__dirname)


// const render = require("./dist/index.html")

const prompts = {
    async getRole() {
        const answers = await inquirer
            .prompt({
                type: 'list',
                name: 'role',

                message: 'What is you Job title?',

                choices: ['Manager', 'Engineer', 'Intern', "end"]

            });
        return answers.role
    },
    getName() {
        return inquirer
            .prompt(
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the first and last name?',
                    validate: nameInput => Boolean(nameInput) || 'please enter the name!'

                },


            )
    },
    getId() {
        return inquirer
            .prompt(
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your ID number?',
                    validate: nameInput => {
                        if (nameInput > 0 && (nameInput < 100)) {
                            return true;
                        } else {
                            console.log('Please enter in the Id number!');
                            return false;
                        }
                    }
                },
            )

    },
    getEmail() {
        return inquirer
            .prompt(
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your ID email adress?',
                    validate: (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || "Please enter a valid email"
                },
            )
    },

    getManagerOffice() {
        return inquirer
            .prompt({
                type: 'input',
                name: 'office',
                message: 'What is your office number?',
                validate: nameInput => {
                    if (nameInput > 0 && (nameInput < 100)) {
                        return true;
                    } else {
                        console.log('Please enter in the office number!');
                        return false;
                    }
                }
            })

    },

    getInternSchool() {
        return inquirer
            .prompt({
                type: 'input',
                name: 'school',
                message: 'Which School do you attend?',
            })
    },

    getEngineerGithub() {
        return inquirer
            .prompt({
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub Username? (Required)',
                validate: nameInput => Boolean(nameInput) || 'please enter your Github username!'

            })
    }

}
const getTeamMembers = async () => {
    const teamMembers = []

    let shouldExit = false
    while (!shouldExit) {
        const role = await prompts.getRole()
        if (["Manager", "Engineer", "Intern"].includes(role)) {

            const { name } = await prompts.getName()
            const { id } = await prompts.getId()
            const { email } = await prompts.getEmail()

            if (role === "Manager") {
                const { office } = await prompts.getManagerOffice()
                teamMembers.push(new Manager(name, id, email, office))
            } else if (role === "Engineer") {
                const { github } = await prompts.getEngineerGithub()
                teamMembers.push(new Engineer(name, id, email, github))
            } else if (role === "Intern") {
                const { school } = await prompts.getInternSchool()
                teamMembers.push(new Intern(name, id, email, school))
            }
        } else shouldExit = true
    }
    return teamMembers
}
getTeamMembers()
    .then((teamMembers) => {
        console.log({ teamMembers });
        generateCard(teamMembers);
    })

function generateCard(teamMembers) {

    // template if teamMembers get role mataches manager then get info and generate card. 
    if (teamMembers.getRole() === "Manager") {
        return `<div class="card ">
    <div class="cardheader">
      <span class=" grey-text text-darken-4">${teamMembers.getRole()}<i class="material-icons right">close</i></span>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${teamMembers.getName()}<i class="material-icons right">more_vert</i></span>
      <p>${teamMembers.getManagerOffice()}</p>
      <p>${teamMembers.getId()}</p>
    </div>
    <div class="card-reveal">
    <p><a href="#">${teamMembers.getEmail()}</a></p>
      <p></p>
    </div>
  </div>
  `;
        // if teamMembers get role matches engineer then get info and generate card. 
    } else if (teamMembers.getRole() === "Engineer") {
        return `<div class="card ">
  <div class="cardheader">
  
    <span class=" grey-text text-darken-4">${teamMembers.getRole()}<i class="material-icons right">close</i></span>
  </div>
  <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">${teamMembers.getName()}<i class="material-icons right">more_vert</i></span>
    <p>${teamMembers.getId()}</p>
  </div>
  <div class="card-reveal">
  <p><a href="#">${teamMembers.getEmail()}</a></p>
  <p><a href="#">github.com/${teamMembers.getEngineerGithub()}</a></p>
    
    <p></p>
  </div>
  </div>
  `;
    } else if (teamMembers.getRole() === "Intern") {
        return `<div class="card ">
  <div class="cardheader">
    <span class=" grey-text text-darken-4">${teamMembers.getRole()}<i class="material-icons right">close</i></span>
  </div>
  <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">${teamMembers.getName()}<i class="material-icons right">more_vert</i></span>
    <p>${teamMembers.getInternSchool()}</p>
  </div>
  <div class="card-reveal">
  <p><a href="#">${teamMembers.getEmail()}</a></p>  
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
  
                    <header class="header">teamMembers Roster</header>
  
  
                    <section>
                      <div class="row" id="card">
                      ${teamMembers.filter((teamMembers) => teamMembers.getRole() === "Manager").forEach(generateCard)}
                      ${teamMembers.filter((teamMembers) => teamMembers.getRole() === "Engineer").forEach(generateCard)}
                      ${teamMembers.filter((teamMembers) => teamMembers.getRole() === "Intern").forEach(generateCard)}
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
function generateCard() {
    fs.writeFileSync(outputPath, "utf-8");
    // render(teamMembers) goes into the write file function if my test does work

};
