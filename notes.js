const fs = require('fs')
const chalk = require('chalk');

const getNotes = function(){
    return 'Your Notes...'
}
const addNote = function(title, body){
    const note = loadNotes()
    const duplicateNotes = note.filter(function(nte){
        return nte.title === title
    })
    // console.log("duplicateNotes :--", duplicateNotes);
   
        if(duplicateNotes.length>0){
        console.log(chalk.red.inverse("Note title taken!"));
        return;
    }    
     
    if (duplicateNotes.length === 0){
        note.push({
            title: title,
            body: body
        })
        saveNotes(note)
        console.log(chalk.green.inverse("new note Added in add note!"));
    }

 
    // } else {
    //     console.log(chalk.red.inverse("Note title taken!"));
    // }

    
    // console.log(note)
}

const saveNotes = function(note){
    const dataJSON = JSON.stringify(note)
    fs.writeFileSync('notes.json',dataJSON)
}

const removeNotes = function(title){
    try{
        const remove = loadNotes()
        const removeNote = remove.filter(function(remove){
        return remove.title !== title
        })

        if (remove.length > removeNote.length){
            console.log(chalk.green.inverse('Note Removed'));
            saveNotes(removeNote)
        }
        // } else{
        //     console.log(chalk.red.inverse('No note found !'))
        // }
    
    } catch(er){
        console.log(chalk.red('Error is not removed'));
    }
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        console.log(chalk.red("kuch kuch error h load notes me"));
        return []
    }
    
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes
}