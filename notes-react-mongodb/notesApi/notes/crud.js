const mongoose = require('mongoose');
const router = require('express').Router();

const note = require('./note');
const middlewareTokenAuth = require('./middlewareTokenAuth');



// Handler for creating note
function createNoteHandler(req, res, next){
    var newNote = new note({
        title: req.body.title,
        body: req.body.body,
        user: req.currentUser.id
    })
    newNote.save()
    .then(note => {
        res.json({
            success: true,
            message: "note created"
        })
    })
    .catch(error => {
        next(error);
    })
}


// Handler for listing notes
function listNoteHandler(req, res, next){
    note.find({user: req.currentUser.id})
    .then(notes => {
        if(notes){
            res.json(notes);
        }
        else{
            res.json({
                success:true,
                message: "no notes for this user"
            })
        }
    })
    .catch(error => {
        next(error)
    })
}



// Handler for deleting note
function deleteNoteHandler(req, res, next){
    note.findOneAndRemove({
        title: req.body.title,
        user: req.currentUser.id
    })
    .then(user => {
        if(user){
            res.json({
                success: true,
                message: "note deleted"
            })
        }
        else{
            res.json({
                message: "no such note exist"
            })
        }
    })
    .catch(error => {
        next(error)
    })
}



// Handler for updating note
function updateNoteHandler(req, res, next){
    note.findOneAndUpdate({
        title: req.body.title,
        user: req.currentUser.id
    },{
        $set: {
            body: req.body.body
        }
    })
    .then(user => {
        if(user){
            res.json({
                success: true,
                message: "note updated"
            })
        }
        else{
            res.json({
                message: "no such note exist"
            })
        }
    })
    .catch(error => {
        next(error)
    })
}



// Middleware to check the token
router.use(middlewareTokenAuth);


// note routes
router.get("/list", listNoteHandler);
router.post("/create", createNoteHandler);
router.delete("/delete", deleteNoteHandler);
router.patch("/update", updateNoteHandler);


module.exports = exports = router;