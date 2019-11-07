// Express App

var express = require('express'); //incluindo o express

var app = express();

app.get('/', function(req,res){ //aqui novamente fazemos uma função que recebe e responde
    res.send('Welcome to the homepage');// no caso as duas enviam um print a partir do metodo send
});

app.get('/contact', function(req,res){
    res.send('Contact Page');
});

app.listen(3000); //iniciado o servidor na porta 3000