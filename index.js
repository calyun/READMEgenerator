// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (response) =>
`# ${response.title}

## Description

${response.description}

## Table of Contents

* [Description] (#Description)
* [Installation] (#Installation)
* [Usage] (#Usage)
* [License] (#License)
* [Contributing] (#Contributing)
* [Tests] (#Tests)
* [Questions] (#Questions)

## Installation

${response.installation}

## Usage

${response.usage}

## License

${response.license}

## Contributing

${response.contributing}

## Tests

${response.tests}

## Questions

${response.github}
${response.email}`;

inquirer
    .prompt([
    {
        type: 'input',
        message: 'Enter your project title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter your project desription:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter your installation instuctions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter your usage information:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter your contribution guidlines:',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Enter your test instructions:',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Select your license:',
        choices: ['License A', 'License B', 'License C'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter your Github username:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email'
    }
    ])
    .then((response) => {
        console.log(response);
        const readme = generateREADME(response);

        fs.writeFile('README.md', readme, (err) =>
        err ? console.log('big oof') : console.log('it good'))
    });
