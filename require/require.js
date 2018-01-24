const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

var res = notes.addNote();
console.log(res);
console.log('Result : ', notes.add(2,-5));
console.log(user);
fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`+'\n');
