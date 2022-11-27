// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your project?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "description",
        message: "How would you describe the purpose of the project?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid description is required");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install the project?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid installation description is required");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use the project?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid usage description is required");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "test",
        message: "How do you test the project?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid usage description is required");
            }
            return true;
        }
    },
    {
        type: "list",
        name: "license",
        message: "Choose the license you would like to use for the project.",
        choices: 
        [
            "MIT",
            "None",
            "GPL_v2",
            "Apache_2.0",
            "GPLv3",
            "BSD_3--Clause"
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to the project?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid contributor is required");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid username is required");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email address?",
        validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
          },
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README has been generated.")
    })
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);
    writeToFile("README.md", markdown);
}

// Function call to initialize app
init();
