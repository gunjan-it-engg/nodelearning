const a = require('./utils')
console.log(a);
const fs = require('fs')
fs.writeFileSync('notes.txt', 'This file was created by node js')
try{
    fs.appendFileSync('notes.txt','data to append');
    console.log("the data to append was appended to file");
} catch (err){
    console.log('error in the file system');
}