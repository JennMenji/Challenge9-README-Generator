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
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
  },
  {
    type: "input",
    name: "contribution",
    message:
      "If you created an application or package and would like other developers to contribute to it, you will want to add guidelines for how to do so.",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Please provide code examples and explicit instructions on how to run all necessary tests.",
  },
  {
    type: "list",
    loop: true,
    name: "license",
    message: "Please select a license from the choices below.",
    choices: licences,
    default: false,
  },

  //   {
  //     type: "confirm",
  //     name: "contentsConfrim",
  //     message:
  //       "Would you like to include a table of contents, to make it easy for users to find what they need? (Optional)",
  //     default: true,
  //   },
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
