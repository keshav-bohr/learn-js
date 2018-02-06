const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
var titleOptions = 
{
    describe : 'title of the note',
    demand : true,
    alias : 't'
}

var bodyOptions = 
{
    describe : 'body of the note',
    demand : true,
    alias : 'b'
}

const argv = yargs
.command('add', 'to add a new note',
{
    title : titleOptions,
    body : bodyOptions
    
})
.command('list', 'to list all the notes ')
.command('read','used to read a note from the list',
{
    title : titleOptions
})
.command('remove', 'to remove an existing note',
{
    title : titleOptions
})
.help()
.argv;


command = process.argv[2];

if(command==='list')
{
    var allNotes = notes.getAll();
    console.log(`printing ${allNotes.length} notes`);
    allNotes.forEach(note => notes.logNote(note));
}
else
{
    if(command==='add')
    {
        var note = notes.addNote(argv.title, argv.body);
        if(!note)
        {
            console.log("note title already in use ");
        }

        else
        {
            console.log("note created successfully ");
            notes.logNote(note);
        }
    }

    else
    {
        if(command==='read')
        {
            var note = notes.getNote(argv.title);
            if(note)
            {
                console.log("searched note =");
                notes.logNote(note);
            }

            else
            {
                console.log("note not found");
            }
        }

        else
        {
            if(command==='remove')
            {
                var noteRemoved = notes.remove(argv.title);
                var message = noteRemoved ? "note removed" : "note not found";
                console.log(message);
            }

            else
            {
                console.log("command not recognised");
            }
        }
    }
}

