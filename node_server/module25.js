// Express App 25

var express = require('express');

var app = express();
app.set('view engine', 'ejs'); //usando EJS como ferramenta para visualização para "visualizar" o perfil requisitado

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req,res){ //Enviando HTML atraves do sendFile
    res.sendFile(__dirname +'/contact.html');
});

app.get('/profile/:name', function(req, res){
    res.send('You are viewing the profile of ' + req.params.name); // Ele recebe parametros a partir da URL e responde a ele dizendo que parametro ele pediu
});



app.listen(3000);