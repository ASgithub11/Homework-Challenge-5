// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeApache = '![License: Apache](https://img.shields.io/badge/License-Apache-blue)';
  const badgeMIT = '![License: MIT](https://img.shields.io/badge/License-MIT-blue)';
  const badgeISC = '![License: ISC](https://img.shields.io/badge/License-ISC-blue)';
  const badgeGPL = '![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue)';
  
  if (license === 'Apache') {  
    return badgeApache;
  } else if (license === 'MIT') {
    return badgeMIT; 
  } else if (license === 'ISC') {
    return badgeISC;
  } else if (license === 'GPLv3') {
    return badgeGPL;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return '(https://opensource.org/license/apache-2-0)'
  } else if (license === 'MIT') {
    return '(https://opensource.org/license/mit)'
  } else if (license === 'ISC') {
    return '(https://opensource.org/licenses/ISC'
  } else if (license === 'GPLv3') {
    return '(https://opensource.org/license/gpl-3-0)'
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache') {
    return `Apache`;
  }else if (license === 'MIT') {
    return `MIT`;
  } else if (license === 'ISC') {
    return `ISC`;
  }else if (license === 'GPLv3') {
    return `GPL-3.0`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## License

This application is covered under ${renderLicenseSection(data.license)} license.

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, reach me on Github: https://github.com/${data.username}

or email me here at ${data.email}

`;
}

export default generateMarkdown;
