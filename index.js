//npm packages
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

const templateHTML = require('./src/templateHTML');


const manageQuest = [
    {
        name: 'manageName',
        type: 'input',
        message: 'What is the name of the manager?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter a manager name for this role'
            }
        }
    },

    {
        name: 'manageId',
        type: 'input',
        message: 'What is the manager ID?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter the ID for this role'
            }
        }
    },

    {
        name: 'manageEmail',
        type: 'input',
        message: 'What is the email of the manager?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter email of manager'
            }
        }
    },

    {
        name: 'manageOfficeNumber',
        type: 'input',
        message: 'What is the office number of the manager?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter manager office number'
            }
        }
    },

];


