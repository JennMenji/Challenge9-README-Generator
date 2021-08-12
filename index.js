// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./utils/generateMarkdown");
const licences = [
  "Apache license 2.0",
  "Boost Software License 1.0",
  "GNU Affero General Public License v3.0",
  "GNU General Public License v3.0",
  "GNU Lesser General Public License v3.0",
  "MIT",
  "Mozilla Public License 2.0",
  "The Unlicense",
];

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the Title of your Project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "filter",
    name: "usage",
    message: "Provide instructions and examples for use.",
  },
  {
    type: "input",
    name: "contribution",
    message:
      "If you created an application or package and would like other developers to contribute to it, please add guidelines for how to do so here.",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Please provide code examples and explicit instructions on how to run all necessary tests.",
  },
  {
    type: "list",
    loop: false,
    name: "license",
    message: "Please select a license from the choices below.",
    choices: licences,
    default: false,
  },
  {
    type: "input",
    name: "gitHubUsername",
    message:
      "Enter your GitHub Username so that others may contact you for questions.",
  },
  {
    type: "input",
    name: "email",
    message:
      "Enter your Email address and instructions on how to contact you for questions.",
  },
];

// TODO: Create a function to write README file
const writeToFile = (readmeInput) => {
  fs.writeFile("./dist/README.md", generatePage(readmeInput), (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("File created!");
  });
};

// TODO: Create a function to initialize app
function init() {
  return inquirer
    .prompt(questions)
    .then((data) => {
      console.log(data);
      return writeToFile(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
