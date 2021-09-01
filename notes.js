const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
    return "Your Notes...";
};
const addNote = function (title, body) {
    const note = loadNotes();
    const duplicateNotes = note.filter(function (nte) {
        return nte.title === title;
    });
    const duplicateNote = note.find((notee)=>notee.title === title)

    debugger

    console.log("duplicateNotes :--", duplicateNotes);

    if (duplicateNotes.length > 0) {
        console.log(chalk.red.inverse("Note title taken!"));
        return;
    }

    if (duplicateNote === undefined) {
        note.push({
            title: title,
            body: body,
        });
        saveNotes(note);
        console.log(chalk.green.inverse("new note Added in add note!"));
    }

    // } else {
    //     console.log(chalk.red.inverse("Note title taken!"));
    // }

    // console.log(note)
};

const saveNotes = function (note) {
    const dataJSON = JSON.stringify(note);
    fs.writeFileSync("notes.json", dataJSON);
};

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const removeNotes = function (title) {
    try {
        const remove = loadNotes();
        const removeNote = remove.filter(function (remove) {
            return remove.title !== title;
        });

        if (remove.length > removeNote.length) {
            console.log(chalk.green.inverse("Note Removed"));
            saveNotes(removeNote);
        }
        // } else{
        //     console.log(chalk.red.inverse('No note found !'))
        // }
    } catch (er) {
        console.log(chalk.red("Error is not removed"));
    }
};

const readNotes = function(title){
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found '))
    }
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        console.log(chalk.red("kuch kuch error h load notes me"));
        return [];
    }
};
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes,
};
