const express = require('express');
const app = express();
const hbs = require('hbs');


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/static'));

hbs.registerHelper('year',()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('upper',(text) => {
    return text.toUpperCase()
})

app.get('/about-us',(req,res) =>{
    res.render('about.hbs',{
        titleName : 'about-us'
    })
})

app.get('/',(req,res) => {
    res.render('home.hbs',{
        titleName : 'Home - Page'
    })
})

app.listen(3000);