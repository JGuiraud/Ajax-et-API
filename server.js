var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", function(req, res){
	res.redirect("/home");
})

app.get("/home", function(req, res){
	res.sendFile(path.join(__dirname, 'public/page', 'index.html'));
})

app.get("/weather", function(req, res){
	res.sendFile(path.join(__dirname, 'public/page', 'weather.html'))
})

app.get("/quelleheure", function(req, res){
	res.sendFile(path.join(__dirname, 'public/page', 'time.html'))
})

app.get("/map", function(req, res){
	res.sendFile(path.join(__dirname, 'public/page', 'map.html'))
})

app.get("/itineraire", function(req, res){
	res.sendFile(path.join(__dirname, 'public/page', 'itineraire.html'))
})

app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});
