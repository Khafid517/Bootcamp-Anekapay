const program = require('commander')
const { prompt } = require('inquirer')

const {
  addUser,
  findUser,
  updateUser,
  removeUser,
  listUsers
} = require('./app')

// User Questions
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'User name'
  },
  {
    type: 'input',
    name: 'gender',
    message: 'User gender'
  },
  {
    type: 'input',
    name: 'age',
    message: 'User age'
  }
]

program 
  .version('1.0.0')
  .description('Client Management System')

// Add Command
program
  .command('add')
  .alias('a')
  .description('Add a user')
  .action(() => {
    prompt(questions).then(answers => addUser(answers))
  })

// Find Command
program
  .command('find <name>')
  .alias('f')
  .description('Find a user')
  .action(name => findUser(name))

// Update Command
program
  .command('update <_id>')
  .alias('u')
  .description('Update a user')
  .action(_id => {
    prompt(questions).then(answers => updateUser(_id, answers))
  })

// Remove Command
program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a user')
  .action(_id => removeUser(_id))

// List Command
program
  .command('list')
  .alias('l')
  .description('List all user')
  .action(() => listUsers())

program.parse(process.argv)