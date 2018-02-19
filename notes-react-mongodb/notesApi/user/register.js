const router = require('express').Router();
const user = require('./user');



// Handler for registering user
function registerHandler(req, res, next){
    var newUser  = new user({
        username: req.body.username,
        password: req.body.password
    })
    return newUser.save()
    .then(user => {
        res.json({
            success: true,
            result: user.username,
        })
    })
    .catch(error => {
        next(error);
    })
}



router.post('/register', registerHandler);

module.exports = exports = router;
