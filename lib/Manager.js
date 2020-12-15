const Employee = require("./classes.js")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.office = officeNumber;

    };
    getRole() {
        return "Manager";
    }

    getRole() {
        return "Manager";
    }

    getManagerOffice() {
        return this.officeNumber;
    };
};






module.exports = Manager