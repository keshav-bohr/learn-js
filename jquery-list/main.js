const express = require('express');
const app = express();


// setting the view for pug
app.set('view engine', 'pug');
app.set('views','./views');


// handlers
function homePageHandler(req, res, nes){
    res.render('list');
}

function addListHandler(req, res, next){
    res.send("success");
}



// initialising handlers request
app.get("/",homePageHandler);
app.post("/addList",addListHandler);


app.listen(3000);

