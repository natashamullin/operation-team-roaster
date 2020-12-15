const Employee = require("./classes.js")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.office = officeNumber;

    };
    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    };
};






module.exports = Manager