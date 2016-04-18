var express=require('express');
var mongoose=require('mongoose');
var index=require('./routes/index');
var ticket=require('./routes/ticket');
var bodyParser=require('body-parser');


var mongoURI = "mongodb://localhost/takingtickets";
var MongoDB = mongoose.connect(mongoURI).connection;

var app=express();

app.use(bodyParser.json());
app.use('/', index);
app.use('/tickets', ticket);
app.use(express.static('server/public'));
//express static.

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});
