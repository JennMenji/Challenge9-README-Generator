// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the Title of your Project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project.",
  },
  //   {
  //     type: "input",
  //     name: "installationInstruc",
  //     message:
  //       "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  //   },
  //   {
  //     type: "input",
  //     name: "usuageInfo",
  //     message:
  //       "Provide instructions and examples for use. Include screenshots as needed.",
  //   },
  //   {
  //     type: "input",
  //     name: "contributionGuidelines",
  //     message: "rfrf",
  //   },
];

// TODO: Create a function to write README file
// function writeToFile(readmeInput) {

// }

const writeToFile = (readmeInput) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", readmeInput, (err) => {
      //   if there is an error, reject the Promise and send the error to the Promise's ".catch()" method
      if (err) {
        reject(err);
        // retrun out of the function here to make sure the Promise doesn't accidentally execute the resolve function as well
        return;
      }

      //   if everything went well, resolve the Promise and send the successful data to the ".then()" method
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then((data) => {
    return writeToFile(data);
    //     fs.writeFile("hello.txt", data, (err) => {
    //       if (err) {
    //         return console.log("wtf");
    //       }
    //       console.log("you did it bitch!");
    //     });
    //   })
    //   .catch((err) => {
    //     console.log("err");
  })
  .catch((err) => {
    console.log(err);
  });
