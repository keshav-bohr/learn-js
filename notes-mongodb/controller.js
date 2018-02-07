const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demo')

const noteSchema = mongoose.Schema({
    title : String,
    body : String
});

const notes = mongoose.model('notes', noteSchema);

function create(req, res) {
    notes.create({ title : req.body.title , body : req.body.body})
    .then(function (note){
        res.send("success");
    })
}


function list(req, res) {
    notes.find({})
    .then(function(note){
        res.json(note)
    });
}


function del(req, res) {
    notes.deleteMany({title : req.body.title})
    .then(function (note){
        res.send("success");
    })
}


module.exports = {
    create,
    list,
    delete : del
}