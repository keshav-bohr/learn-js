const user = require('../user/user')
const app = require('express')();
const cookieParser = require('cookie-parser');

// Cookie parser for token as cookie
app.use(cookieParser())


// Checking the token before every note request
function checkTokenMiddleware(req, res, next){
    var token = req.cookies.token;
    user.verifyToken(token)
    .then(user => {
        if(user){
            req.currentUser = user;
            next();
        }
        else{
            res.send("user not found");
        }
    })
    .catch(error => {
        next(error);
    })
}

module.exports = exports = checkTokenMiddleware;