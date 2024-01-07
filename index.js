const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let teamMembers = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
//function to initialize the app, prompt to enter the team manager’s info
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
            teamMembers.push(manager);
            // calls function to choose what to do next (add member or finish)
            addMember();
        }
  )
}
// present a menu with the option to: Add an engineer, Add an intern, Finish building the team
function addMember() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "member",
            message: "What do you want to do next?",
            choices: ["Add an engineer", "Add an intern", "Finish"],
            },
    ])
    .then((data) => {
        switch (data.member) {
            case "Add an engineer":
            addEngineer();               
            break;                     
          case "Add an intern":   
            addIntern();
            break;
          default:
            finishedTeam();
        }
    });
    
}
// function to add an engineer to the team, promts to gather info
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
            teamMembers.push(engineer);
            // calls function to choose what to do next (add member or finish)
            addMember();
        }
  )
}   
// function to add an intern to the team, promts to gather info
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
                message: "Enter the intern's school",
            },
        ])
        .then((data) => {
            const intern = new Intern (
            data.intName,
            data.intId,
            data.intEmail,
            data.intSchool
            );
            teamMembers.push(intern);
            // calls function to choose what to do next (add member or finish)
            addMember();
        }
  )
}
// call finishedTeam to create a HTML file and finish creating the team info
function finishedTeam() {
    // Create the output directory if it doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    fs.writeFile(outputPath, render(teamMembers), (err) => {
        if (err) {
            console.error("Error writing team HTML file:", err);
        } else {
            console.log("Team HTML file generated successfully!");
        }
    });
}

// call addManager function to initilize the app
addManager();