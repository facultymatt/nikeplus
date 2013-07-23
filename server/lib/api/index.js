var express   = require('express');
var app       = module.exports = express();
var fs        = require('fs');
var path      = require('path');

app.get('/api/bower', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../bower.json'));
});

app.get('/api/package', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../package.json'));
});


var Nike = require('node-nike');


app.get('/api/nike', function(req, res) {
  
  var access_token = '8f9a3ae4c671f329bb62f26c577c6513';
  var nike = new Nike(access_token);
  
  console.log(nike);
  
  nike.get(function(err, data) {
      console.log(err);
    });
});

