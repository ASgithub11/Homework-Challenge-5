// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "What is the description of your project?",
    "What are the instructions for installation?",
    "What is the usage of your project?",
    "What is the license of your project?",
    "Any contributers you would like to provide?",
    "What are the tests of your project?",
    "Questions?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
