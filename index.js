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

function addMember() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "member",
            message: "What do you want to do next?",
            choices: ["Add an engineer", "Add an intern", "Finished"],
            },
    ])
    .then((data) => {
        switch (data.member) {
            case "Engineer":
            addEngineer();               
            break;                     
          case "Intern":   
            addIntern();
            break;
          default:
            finishedTeam();
        }
    });
    
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "engName",
                message: "Enter the engineer's name",
            },
            {
                type: "input",
                name: "engId",
                message: "Enter the engineer's id",
            },
            {
                type: "input",
                name: "engEmail",
                message: "Enter the engineer's email",
            },
            {
                type: "input",
                name: "engGithub",
                message: "Enter the engineer's Github",
            },
        ])
        .then((data) => {
            const engineer = new Engineer (
            data.engName,
            data.engId,
            data.engEmail,
            data.engGithub
            );
            addMember();
        }
  )
}   

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "intName",
                message: "Enter the team intern's name",
            },
            {
                type: "input",
                name: "intId",
                message: "Enter the team intern's id",
            },
            {
                type: "input",
                name: "intEmail",
                message: "Enter the team intern's email",
            },
            {
                type: "input",
                name: "intSchool",
                message: "Enter the intern's",
            },
        ])
        .then((data) => {
            const intern = new Intern (
            data.intName,
            data.intId,
            data.intEmail,
            data.intSchool
            );
            addMember();
        }
  )
}

function finishedTeam() {
    
}
addManager();