const fs = require('fs')
const chalk = require('chalk');

const getNotes = function(){
    return 'Your Notes...'
}
const addNote = function(title, body){
    const note = loadNotes()
    note.push({
        title: title,
        body: body
    })
    saveNotes(note)
    console.log(note)
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
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