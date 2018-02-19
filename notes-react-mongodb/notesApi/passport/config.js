const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const user = require('../user/user')



// providing local strategy for passport to authenticate every time the passport.authenticate is called
module.exports = exports = new LocalStrategy(
    function (username, password, done) {
        user.findOne({
            username: username
        }).then(user => {
            if (!user) {
                return done(null, false);
            }

            else {
                user.verifyPassword(password)
                .then(match => {
                    if(match){
                        done(null, true);
                    }
                    else{
                        done(null, false);
                    }
                })
            }
        })
            .catch(error => {
                done(error);
            })
    }
)