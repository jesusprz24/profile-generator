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

//engineer questions below
const engineQuest = [
    {
        name: 'engineName',
        type: 'input',
        message: 'What is the name of the engineer?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter an engineer name for this role'
            }
        }
    },

    {
        name: 'engineId',
        type: 'input',
        message: 'What is the engineer ID?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter the ID for this role'
            }
        }
    },

    {
        name: 'engineEmail',
        type: 'input',
        message: 'What is the email of the engineer?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter email of engineer'
            }
        }
    },

    {
        name: 'engineGithub',
        type: 'input',
        message: 'What is the engineers Github?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter the engineer Github'
            }
        }
    },

];

// Intern questions below
const internQuest = [
    {
        name: 'internName',
        type: 'input',
        message: 'What is the name of the intern?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter an intern name for this role'
            }
        }
    },

    {
        name: 'internId',
        type: 'input',
        message: 'What is the intern ID?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter the ID for this role'
            }
        }
    },

    {
        name: 'internEmail',
        type: 'input',
        message: 'What is the email of the intern?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter email of intern'
            }
        }
    },

    {
        name: 'internSchool',
        type: 'input',
        message: 'What is the interns school?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter the interns school'
            }
        }
    },

];

//add another role
const addAnother = [
    {
        name: 'addAnother',
        type: 'list',
        message: 'Would you like to add another role?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please select an option'
            }
        }
    },
];

//add manager, engineer or intern role
function managerRole() {
    inquirer.prompt(manageQuest).then(respons => {
        const manage =  new manager(response.managName, response.manageId, reponse.manageEmail, response.manageOfficeNumber)
        managersArr.push(manage);
        associatesComplete()
    });
};

function enginerRole() {
    inquirer.createPromptModule(engineQuest).then(respons => {
        const engine =  new engineer (response.engineName, response.engineId, reponse.engineEmail, response.engineGithub)
        enginersArr.push(engine);
        associatesComplete()
    });
};

function internRole() {
    inquirer.createPromptModule(internQuest).then(respons => {
        const managr =  new intern (response.internName, response.internId, reponse.internEmail, response.internSchool)
        internsArr.push(intern);
        associatesComplete()
    });
};

//add assocates complete function below