var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

fs.readFile('index.html', function (err, data) {
	if (err) throw err;
	app.get('/', function(request, response) {
		response.send(data);
	});
});
app.get('/', function(request, response) {
	var rawdata = fs.readFileSync("index.html","utf-8");
	var bufferhandle = new Buffer(rawdata); 
	response.send(bufferhandle.toString());
	console.log('>'= bufferhandle.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
