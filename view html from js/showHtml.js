var  http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    //var data1 = fs.readFileSync('./show.html','utf8');
    fs.readFile('./show.html','utf8',(err,data)=>{
        console.log('inside read');
        res.write(data);
        res.end();
    
    });
    //res.write(data1);
}).listen(8080);
