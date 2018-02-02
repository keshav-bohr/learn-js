const functionNotes = require("./notes.js");

const homePageHandler = function(req, res, next){
    res.render("index");
}



const createNoteFileHandler = function(req,res,next){
    let notes = functionNotes.fetchNotes();
    notes.push(req.body);
    functionNotes.saveNote(notes);
    res.end();
}


const listNoteHandler = function(req,res,next){
    let notes = functionNotes.fetchNotes();
    res.send(notes);
}

const deleteNoteHandler = function(req,res,next){
    let notes = functionNotes.fetchNotes();
    filteredNotes = notes.filter((note) => req.body.title!==note.title);
    functionNotes.saveNote(filteredNotes);
    res.end();
}


module.exports = {
    homePageHandler,
    createNoteFileHandler,
    listNoteHandler,
    deleteNoteHandler
}