const Employee = require("./classes.js")

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;

    };

    getManagerOffice() {
        return this.office;
    };
};






module.exports = Manager