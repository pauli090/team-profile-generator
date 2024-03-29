// TODO: Write code to define and export the Engineer class.  hINT: This class should inherit from Employee.
const Employee = require("./Employee");
// extend Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;