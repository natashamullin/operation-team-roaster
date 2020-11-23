const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const fs = require('fs');
const generatePage = require('../src/template.js');

// classes
// Employee, Manager, Engineer, and Intern
// first class is employee paernt class with the following 
class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.office = office;
        this.title = title;


    }

    getRole() {
        inquirer
            .prompt({
                type: 'list',
                name: 'title',
                message: 'What is you Job title?',

                choices: ['Manager', 'Engineer', 'Intern']

            })

            .then(({ title }) => {
                if (title === 'Manager' || title === 'Engineer') {
                    return this.title, // should i be using .splice to over ride? 
                        getOffice()
                } else { !title === 'Manager' || !title === "Engineer" } {
                    return this.title,
                        getSchool()
                }
            })
    }

    getOffice() {
        inquirer
            .prompt({
                type: 'text',
                name: 'office',
                message: 'What is your office number?'
            })
        // is this necessary? //destructure name from the prompt object
        // .then(({ name }) => {
        //     this.employee = new Employee(name);

        //     //this.startNewBattle();
        // })
    }
    getSchool() {
        inquirer
            .prompt({
                type: 'text',
                name: 'school',
                message: 'Which School do you attend?',
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('please enter the school you are attending.')
                        return false
                    }
                }
            })
    };

    getInfo() {

        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: 'What is your first and last name?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true
                        } else {
                            console.log('please enter your name!')
                            return false
                        }
                    },

                },
                {
                    type: 'text',
                    name: 'id',
                    message: 'What is your ID number?'
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'What is your ID email adress?',
                    default: () => { },
                    validate: function (email) {

                        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                        if (valid) {
                            return true;
                        } else {
                            console.log("Please enter a valid email")
                            return false;
                        }
                    }
                },


                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter your GitHub Username? (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true
                        } else {
                            console.log('please enter Username!')
                            return false
                        }
                    }

                },
            ])
    };

    enterAnother() {
        inquirer
            .prompt({
                type: 'confirm',
                message: 'Would you like to add another employee?',
                name: 'anotherEmployee',
                when: ({ anotherEmployee }) => {
                    if (anotherEmployee) {
                        return getRole()
                    } else {
                        return generatePage();
                    }
                }


            })

    }
    //HOW DO YOU GENERATE THE PAGE?

    //The other three classes will extend Employee.

    // In addition to Employee's properties and methods, Manager will also have:

    // officeNumber

    // getRole() // Overridden to return 'Manager'

    // In addition to Employee's properties and methods, Engineer will also have:

    // github // GitHub username

    // getGithub()

    // getRole() // Overridden to return 'Engineer'

    // In addition to Employee's properties and methods, Intern will also have:

    // school

    // getSchool()

    // getRole() // Overridden to return 'Intern'
}
module.exports = Employee