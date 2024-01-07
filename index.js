const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
//name id email officeNumber
function addManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "manName",
                message: "Enter the team manager's name",
            },
            {
                type: "input",
                name: "manId",
                message: "Enter the team manager's id",
            },
            {
                type: "input",
                name: "manEmail",
                message: "Enter the team manager's email",
            },
            {
                type: "input",
                name: "manOfficeNumber",
                message: "Enter the team manager's office number",
            },
        ])
        .then((data) => {
            const manager = new Manager (
            data.manName,
            data.manId,
            data.manEmail,
            data.manOfficeNumber
            );
            addMember();
        }
  )
}

addManager();