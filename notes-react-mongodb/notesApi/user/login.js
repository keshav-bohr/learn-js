const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const router = require('express').Router();

const user = require('./user');


// Handler for logging in the user
function loginHandler(req, res, next) {
    user.findOne({
        username: req.body.username
    })
        .then(user => {
            return user.saveToken();
        })
        .then(user => {
            // res.clearCookie('token');
            res.cookie('token', user.tokens[user.tokens.length - 1])
            res.json({
                success: true
            })
        })
        .catch(error => {
            next(error);
        })
}


// login route with passport.authenticate whose local strategy is configured
router.post("/login", passport.authenticate('local', {session: false }), loginHandler);


module.exports = exports = router;