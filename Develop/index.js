// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const generatePage = require("./utils/generateMarkdown");

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
  //   {
  //     type: "input",
  //     name: "contributionGuidelines",
  //     message: "rfrf",
  //   },
  {
    type: "confirm",
    name: "contentsConfrim",
    message:
      "Would you like to include a table of contents, to make it easy for users to find what they need? (Optional)",
    default: true,
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
      return writeToFile(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
