// index.js


   
const inquirer = require('inquirer');
inquirer
.prompt([
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How should users install your project?',
    default: 'npm install',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should users use your project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can other developers contribute to your project?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What is the license for your project?',
    default: 'MIT',
  },
  {
    type: 'input',
    name: 'contact',
    message: 'How can users contact you for questions or support?',
  },
  {
    type: 'input',
    name: 'acknowledgements',
    message: 'Are there any acknowledgements or credits you want to include?',
  },
])
.then((answers) => {
  console.log('User responses:', answers);
  // Now you can use the gathered information to generate the README file content
})
.catch((error) => {
  console.error('Error:', error);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
