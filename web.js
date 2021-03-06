var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var html = fs.readFileSync('index.html').toString('utf-8');
    response.send(html);
});

//var homepage = fs.readFileSync('index.html');
//app.get('/',function(request,response) {
//    response.send(homepage.toString('utf-8'));
//});

//var app = express.createServer(express.logger());

//app.get('/', function(request, response) {
//   response.send(fs.readFileSync('index.html'));
//});

//fs.readFileSync('index.html');


var port = process.env.PORT || 8080;
app.listen(port, function() {
   console.log("Listening on " + port);
});
