var express = require('express');
var mysql = require('mysql');
var app = require('express')();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
var net = require('net');

  var robot;
var server = net.createServer(function(socket){
  console.log("Connection made");
  var node;
  socket.on('data', function(data){
    console.log(data.toString());
    if(data.toString() == "robot"){
      robot = socket;
    } else {
      robot.write(data.toString() + "\r\n");
    }
  });

});

server.listen(8080, '138.197.205.247');
/*

*/
/*
app.get('/', function(req, res) {
  res.json({ message: 'API is Online!' });
});

app.listen(8080, function(){
  console.log();
});
*/

/*
router.use(function(req, res, next) {
  next()
});

router.route('/drinks').get((req, res) => {
  con.query("select * from drinks", function(err, result) {
    if (err) throw err;
    res.json({ message: result});
  }); 
});


app.use('/api', router);
*/
