const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const { generatePage, writeFile } = require('./src/template2');
let team = [];
const promptManager = () => {
    inquirer
        .prompt([
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
                message: 'What is the managers ID number?',
                validate: nameInput => Boolean(nameInput) || 'please enter the name!'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the mangers email?',
                validate: (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || "Please enter a valid email"
            },

            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number?'
            },
        ])
        .then(({ name, id, email, officeNumber }) => {
            this.manager = new Manager(name, id, email, officeNumber);
            team.push(this.manager);
            console.log(team);
            promptTeamMember()
        })
};
const promptTeamMember = () => {
    inquirer
        .prompt({
            type: 'list',
            message: 'Would you like to add a team member?',
            name: 'addMember',
            choices: ['Engineer', 'Intern', 'No']
        })
        .then(({ addMember }) => {
            if (addMember === 'Engineer' || addMember === 'Intern') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Name of team member',
                            validate: nameInput => Boolean(nameInput) || 'Please enter your name.'
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'What is employee identification number?'
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
                            when: (answers) => answers.role === 'Engineer'
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: 'What is the school intern is attending?',
                            when: (answers) => answers.role === 'Intern'
                        }
                    ])
                    .then(({ name, id, email, role, github, school }) => {
                        if (role === 'Engineer') {
                            this.engineer = new Engineer(name, id, email, github);
                            team.push(this.engineer);
                            console.log(team);
                            promptMemberTeam()
                        } else {
                            this.intern = new Intern(name, id, email, school);
                            team.push(this.intern);
                            console.log(team);
                            promptTeamMember()
                        }
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