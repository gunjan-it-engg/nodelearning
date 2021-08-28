const add = require('./utils')
const chalk = require('chalk');
const validator = require('validator')  //global packages are not need to given ./ this thing
const getNotes = require('./notes')
console.log(getNotes);
console.log(add);
console.log(validator);

const notes = getNotes()
console.log(notes);
const sum = add(45,2)
console.log(sum)
const fs = require('fs')
fs.writeFileSync('notes.txt', 'This file was created by node js')
try{
    fs.appendFileSync('notes.txt','data to append');
    console.log("the data to append was appended to file");
} catch (err){
    console.log('error in the file system');
}
console.log(validator.isEmail('gunjan123.com'));
console.log(chalk.blue.bgRed.bold("Hello World"));
console.log(chalk.green.underline.bold('sucess!'));
console.log(chalk.blue.inverse.bold('hello!'));
console.log(chalk.red.inverse.bold('hello!'));
console.log(chalk.white.bold('hello!'));
console.log(chalk.yellow.bold('hello!'));



