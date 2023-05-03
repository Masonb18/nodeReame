// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {generateMarkdown}= require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your application title',
            name:'title'
        },
        {
            type: 'input',
            message: 'Describe your application',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are the installation instructions',
            name: 'install'
        },
        {
            type: 'input',
            message:'How do you use the app',
            name:'usage'
        },
        {
            type: 'list',
            message: 'Choose your license',
            name:'License',
            choices:['Apache license 2.0', 'MIT', 'Boost Software License 1.0']
        },
        {
            type:'input',
            message:'Who contributed to the application',
            name:'Contributing'
        },
        {
            type:'input',
            message:'What Tests were ran',
            name:'Tests'
        },
        {
            type:'input',
            message:'What is your email',
            name:'Questions'
        }
    ])
    .then((response)=>{
// This is my data
        const readMePage = generateMarkdown(response);
        
        fs.writeToFile('readme.md', readMePage, (err) =>
        err ? console.log(err) : console.log('Successfully created ReadMe.md') 
        );
    });


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
