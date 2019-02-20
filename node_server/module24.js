// Express App 24

var express = require('express');

var app = express();

app.get('/', function(req,res){
    res.send('Welcome to the homepage');
});

app.get('/contact', function(req,res){
    res.send('Contact Page');
});

app.get('/profile/:id', function(req, res){
    res.send('You requested to see a profile with id of ' + req.params.id); // Ele recebe parametros a partir da URL e responde a ele dizendo que parametro ele pediu
});



app.listen(3000);