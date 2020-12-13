// runs the app
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const path = require("path");
const fs = require("fs");


const outputPath = path.join(__dirname, "dist/index.html");
console.log(__dirname)


const render = require("./src/template")

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
        generatePage(teamMembers);
    })

function generatePage(teamMembers) {
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}
