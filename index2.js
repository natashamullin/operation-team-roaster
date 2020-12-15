const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const { generatePage, writeFile } = require('./src/template2');
const team = [];
const promptManager = () => {

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: "Are you the Manager?",
                choices: ["Yes", "no"],
                validate: choices => {
                    if (choices === "yes") {
                        this.manager = new Manager(role);
                        // team.push(this.manager);
                        return true;
                    } else {
                        console.log("Sorry only the Manager is able to input employee information!")
                    }
                }
            },

            {
                type: 'input',
                name: 'name',
                message: 'What is the Managers name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the managers ID?',
                validate: nameInput => Boolean(nameInput) || 'please enter the Id!'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Managers email?',
                validate: (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || "Please enter a valid email"
            },

            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number?',
                validate: (officeNumber) => !isNaN(officeNumber) || 'please enter the the office number'
            },
        ])
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber,);
            team.push(manager);
            console.log(team);
            promptTeamMember()
        })
};
const promptTeamMember = () => {
    inquirer
        .prompt({
            type: 'list',
            message: 'Would you like to add a team member?',
            name: 'role',
            choices: ['Engineer', 'Intern', 'No']
        })
        .then(({ role }) => {
            if (role === 'Engineer') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Engineer first and last name?',
                            validate: nameInput => Boolean(nameInput) || 'Please enter your name.'
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'What is Engineer ID number?',
                            validate: (officeNumber) => !isNaN(officeNumber) || 'please enter the the ID number'
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'What is employee email?',
                            validate: (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || "Please enter a valid email"
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: 'What is the link to guthub employee site?',
                            validate: nameInput => Boolean(nameInput) || 'please enter your Github username!',
                        },

                    ])

                    .then(answers => {
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        team.push(engineer);
                        console.log(team);
                        promptTeamMember()
                    })
            } else if (role === 'Intern') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Intern first and last Name',
                            validate: nameInput => Boolean(nameInput) || 'Please enter your name.'
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'What is employee ID number?',
                            validate: (officeNumber) => !isNaN(officeNumber) || 'please enter the the ID number'
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'What is employee email?',
                            validate: (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || "Please enter a valid email"
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: 'What is the school the intern is attending?',
                        },

                    ])
                    .then(answers => {
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        team.push(intern);
                        console.log(team);
                        promptTeamMember()

                    })
            } else {
                console.log('Your team page has been generated');
                console.log(team);
                const htmlPage = generatePage(team);
                writeFile(htmlPage);

            }
        });
};
promptManager()