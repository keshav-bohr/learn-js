const fs = require('fs');

var fetchNotes = () =>
{
    try
    {
        noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }

    catch(e)
    {
        return [];
    }

}

var saveNote = (notes) => 
{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var logNote = (note) => console.log(`\nTitle : ${note.title}\nBody : ${note.body}`);


var addNote = (title,body) => 
{
    console.log('adding note ',title, body);
    var notes = fetchNotes();
    var note = 
    {
        title,
        body
    };


    var duplicateNote = notes.filter((note) => note.title===title);
    //console.log('printing duplicateNote',duplicateNote);
    if(duplicateNote.length===0)
        {
            notes.push(note);
            saveNote(notes);
            return note;
        }
};

var getAll = () =>
{
    return fetchNotes();
}

var getNote = (title) =>
{
    var notes = fetchNotes();
    var requiredNote = notes.filter((note) => note.title === title);
    return requiredNote[0];
}

var remove = (title) =>
{
    var notes = fetchNotes();
    var savingNotes = notes.filter((note) => note.title!==title);
    saveNote(savingNotes);

    return notes.length !== savingNotes.length;
}

module.exports = 
{
    addNote,
    getAll,
    getNote,
    remove,
    logNote
};