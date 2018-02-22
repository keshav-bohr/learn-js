const mongoose = require('mongoose');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken')



// User Schema
const userSchema = mongoose.Schema({
    username: {
        type : String,
        required : true,
        trim : true,
        unique : true,        
    }

    ,password: {
        type : String,
        required : true,
        minlength : 6
    }

    ,tokens: [String]
})



// hashing password before saving it
userSchema.pre('save', function(next){
    var user = this;
    if(user.isModified('password')){
        argon2.hash(user.password)
        .then(hash => {
            user.password = hash;
            next();
        })
        .catch(error => {
            next(error);
        })
    }
    else{
        next();
    }
})


// function to save token
userSchema.methods.saveToken = function(){
    let token = jwt.sign({id : this.id}, "thatIsClassic");
    this.tokens.push(token);
    return this.save();
}



// verifying the password submitted by user using argon2
userSchema.methods.verifyPassword = function(userSubmittedPassword){
    return argon2.verify(this.password, userSubmittedPassword);
}




// verifying the token present in the cookie
userSchema.statics.verifyToken = function(token){
    var decoded = jwt.verify(token, 'thatIsClassic');
    var user = this;
    return user.findOne({
        "_id": decoded.id,
        "tokens" : token
    });
}


const user = mongoose.model('user',userSchema);

module.exports = exports = user;