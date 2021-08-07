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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  return `
  ## License
  ${renderLicenseBadge(license)}
  The license for this project is the ${license} License.
    `;
}

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
  * [License](#license)
  * [Contribution Guidelines](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation
  ${data.installation}
    
  ## Usage 
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  Below are some examples on how to run the tests for this project.
  ${data.tests}

  ## Questions
  For more questions about this project you may use the below contact information:

  GitHub: https://github.com/${data.gitHubUsername}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
