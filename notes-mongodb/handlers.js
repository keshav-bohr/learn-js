const controller = require('./controller.js');


// display the home page
const homePageHandler = function(req, res, next){
    res.render("index");
}


// handler for creating new note
const createNoteFileHandler = function(req,res,next){
    controller.create(req,res);    
}


// handler for listing all notes
const listNoteHandler = function(req,res,next){
    controller.list(req,res);
}


// handler for deleting a note
const deleteNoteHandler = function(req,res,next){
    controller.delete(req,res);
}


module.exports = {
    homePageHandler,
    createNoteFileHandler,
    listNoteHandler,
    deleteNoteHandler
}