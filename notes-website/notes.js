const fs = require('fs');

const fetchNotes = function(){
    try{
        noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }

    catch(e){
        return [];
    }

}

const saveNote = function(notes){
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

module.exports = {
    fetchNotes,
    saveNote
}