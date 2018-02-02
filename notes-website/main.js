const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const handlers = require("./handlers.js")

app.use(bodyParser.json());


app.post("/new-note",handlers.createNoteFileHandler);
app.get("/",handlers.homePageHandler);
app.get("/list",handlers.listNoteHandler);
app.delete("/delete",handlers.deleteNoteHandler);


app.set("view engine", "pug");
app.set("views", "./views");

app.listen(3000);