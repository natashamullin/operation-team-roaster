const Employee = require("./classes.js")
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
    };

    getInternSchool() {
        return this.school;
    };

};

module.exports = Intern