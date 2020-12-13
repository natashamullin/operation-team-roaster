class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole() {
        return "Empolyee";
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
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