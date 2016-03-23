var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http').Server(app);
//var io = require('socket.io')(http);
var path = require('path');
var https = require('https');
var bodyParser = require('body-parser');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
//console.log(path.join(__dirname, '/public/')); 	
//app.use(express.static(path.join(__dirname, '/public/')));
app.get('/', function(req, res){
  res.render('index.html')
});

/*io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});*/

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});