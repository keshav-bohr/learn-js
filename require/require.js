const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

console.log(user);
fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
