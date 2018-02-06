const fs = require('fs');


// fetching notes from file
const fetchNotes = function(){
    try{
        noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }

    catch(e){
        return [];
    }

}



// saving a note to file
const saveNote = function(notes){
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

module.exports = {
    fetchNotes,
    saveNote
}