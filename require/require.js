
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ =require('lodash');

var user = os.userInfo();

var res = notes.addNote();
console.log(res);
console.log('Result : ', notes.add(2,-5));
console.log(user);
fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`+'\n');
console.log(_.isString('hello'));
console.log(_.uniq([1,2,1,2,3]));
