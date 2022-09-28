// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const runCode = function init() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?'
        },
        {
          type: 'input',
          name: 'description',
          message: 'Write a description of your project.'
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Write the steps required to install your project.'
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Write the instructions and examples of use.'
        },
        {
          type: 'input',
          name: 'contribution',
          message: 'Write the contribution guidelines.'
        },
        {
          type: 'input',
          name: 'test',
          message: 'Write the test instructions.'
        },
        {
          type: 'list',
          name: 'license',
          message: 'Choose your license.',
          choices: ['license 1', 'license2'
          ],
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is your github username?'
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email?'
        }
      ])
      .then((data) =>
      fs.writeFileSync('README.md', generateMarkdown(data)));
    };
// Function call to initialize app
runCode();
