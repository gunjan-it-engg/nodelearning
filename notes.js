const fs = require('fs')
const chalk = require('chalk');

const getNotes = function(){
    return 'Your Notes...'
}
const addNote = function(title, body){
    const note = loadNotes()
    const duplicateNotes = note.filter(function(note){
        return note.title === title
    })

    if (duplicateNotes.length === 0){
        note.push({
            title: title,
            body: body
        })
        saveNotes(note)
        console.log(chalk.green("new note Added !"));
    } else {
        console.log(chalk.red("Note title taken!"));
    }

    
    console.log(note)
}

const saveNotes = function(note){
    const dataJSON = JSON.stringify(note)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        console.log(chalk.red("kuch kuch error h"));
        return []
    }
    
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}