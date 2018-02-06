const models = require('../models/index');



//create new note

function create(req,res){    
    models.notes.create({
        title: req.body.title,
        body: req.body.body
    }).then(function(todo) {
        res.json(todo);
    });
}


//display all notes


function list(req,res){    
    models.notes.findAll({}).then(function(note){
        res.json(note);
    })
}


//delete note from database using title


function del(req,res){    
    models.notes.destroy({
        where: {
        title : req.body.title
        }
    }).then(function(todo) {
        res.json(todo);
    });
}

module.exports = {
    create, list , delete : del
}

