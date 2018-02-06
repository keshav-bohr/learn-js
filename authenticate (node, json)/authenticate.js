var http = require ('http');
var fs = require ('fs');
var url = require ('url');

http.createServer ( function (req,res)
{
	fs.readFile('credentials.json', function(err, data)
	{

		var q= url.parse(req.url,true).query;
		//var username = q.username;
		//var password = q.password;
		var ex=JSON.parse(data);
		res.writeHead(200, {'content-type' : 'text/html'});
		if((ex.username==q.username)&&(ex.password==q.password))
		{
			res.end("OK");
		}
		
	});
}).listen(8080);