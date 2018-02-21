const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const userRegisterRouter = require('./user/register');
const config = require('./passport/config')
const userLoginRouter = require('./user/login')
const notesRouter = require('./notes/crud')


// Connect to database
mongoose.connect("mongodb://localhost/demo");



// Cross origin request
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));


// send and receive cookies
app.use(cookieParser())

// parse json and urlencoded data
app.use(bodyParser.json());



// Internal error handler
app.use((error, req, res, next) => {
    res.status(500).send('internal error occurred')
});



// Configuring passpart and initialising it
passport.use(config);
app.use(passport.initialize());


// User routes
app.use('/user',userRegisterRouter);
app.use('/user',userLoginRouter);


// Note route
app.use('/note',notesRouter);


// starting server at port 3001
app.listen(3001);