const add = require('./utils')
const chalk = require('chalk');
const validator = require('validator')  //global packages are not need to given ./ this thing
const getNotes = require('./notes')
// yarg helps me to build interactive command line tool by parsing arguments & generating an elegent interface .
const yargs = require('yargs')
//console.log(getNotes);
//console.log(add);
//console.log(validator);

// yargs 
yargs.version('1.1.1')

// add , read , remove , list


// create add command
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Add a new note',
            demandOption: true,
            type:'string', 
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        getNotes.addNote(argv.title,argv.body)
        console.log('Title:'+argv.title);
        console.log('Body:-' + argv.body);
        console.log("Adding a new note!",argv);
        console.log(chalk.green.underline.bold("Sucess Added a note"));
    }
})

// yargs remove command 
yargs.command({
    command:'remove',
    describe:'removing a note from command',
    handler:function(){
        console.log("your note is removed")
    }
})


// command to read 
yargs.command({
    command:'read',
    describe:'You can read the docs with the self',
    handler:function(){
        console.log("your note in reading phase")
    }
})

// command to create an list 
yargs.command({
    command:'list',
    describe:'you are in list phase ',
    handler:function () {
        // body...
        console.log("list is created")
    }
})


// const notes = getNotes()
// console.log(notes);
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
// console.log(process.argv[2]);


// taking input from the user with the command line arguments
const command = process.argv[2]
if (command === 'add'){
    console.log(chalk.green.bold("sucess! your add is getting "));
} else {
    console.log(chalk.bgRed.bold("Not Found!"));
}
// for printing the details related to the yarg
console.log(yargs.argv);
yargs.parse()