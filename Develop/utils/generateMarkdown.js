// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var selectedLicense = license;
  var licenseBadgeName = selectedLicense.replace(/ /g, "%20");

  if (!selectedLicense) {
    return "";
  }

  return `
  ![License](https://img.shields.io/badge/license-${licenseBadgeName}-blue)
      `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  return `
  ## License

  The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)
    `;
}

// ask user yes/no question if the want a TOC
// take user input and validate as true/false
// create function to take validation and either include or exclude TOC
// create html template that will create a TOC based on other User inputs

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents (Optional)

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [Contribution Guidelines](#contribution)
  * [Tests](#tests)


  ## Installation
  ${data.installation}
    
  ## Usage 
  ${data.usage}

  ${renderLicenseSection}

  ## Contribution Guidelines
  ${data.contritution}

  ## Tests

    Go the extra mile and write tests for your application. Then provide examples on how to run them.

`;
}

module.exports = generateMarkdown;
