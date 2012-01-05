var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.serveStatic = function(/* String */ filename, response) {
  fs.readFile(__dirname + '/' + filename, 'utf8', function(err, text) {
    // TODO: Handle errors
    response.send(text);
  });
}

app.get('/', function(request, response) {
  app.serveStatic('index.html', response);
});

app.get('/channel.html', function(request, response) {
  app.serveStatic('channel.html', response);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
