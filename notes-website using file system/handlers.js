const notes = require('./notes');


// display the home page
const homePageHandler = function(req, res, next){
    res.render("index");
}


// handler for creating new note
const createNoteFileHandler = function(req,res,next){
    note = notes.fetchNotes();
    note.push(req.body);
    notes.saveNote(note);
    res.end();
}


// handler for listing all notes
const listNoteHandler = function(req,res,next){
    note = notes.fetchNotes();
    res.send(note);
}


// handler for deleting a note
const deleteNoteHandler = function(req,res,next){
    note = notes.fetchNotes();
    filteredNote = note.filter((eachNote) => eachNote.title!== req.body.title);
    notes.saveNote(filteredNote);
}


module.exports = {
    homePageHandler,
    createNoteFileHandler,
    listNoteHandler,
    deleteNoteHandler
}