var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//    response.send('Hello World!');
      var resp = fs.readFile(__dirname + '/index.html', 'utf8', function(err, text){
        response.send(text);
      });
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
