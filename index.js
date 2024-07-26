// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "What is the description of your project?",
    "What are the instructions for installation?",
    "What is the usage information of your project?",
    "What is the license of your project?",
    "What are the contribution guidelines?",
    "What are the tests instructions for your project?",
    "Enter your GitHub username:",
    "Enter your email address:"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.error(err) : console.log('Success! README.md generated!');
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
