// Express App 25 and 26

var express = require('express');

var app = express();
app.set('view engine', 'ejs'); //usando EJS como ferramenta para visualização para "visualizar" o perfil requisitado

app.get('/', function(req,res){
    res.render('index');
});

app.get('/contact', function(req,res){ //Enviando HTML atraves do sendFile
    res.render('contacts');
});

app.get('/profile/:name', function(req, res){
    var data = {age: 18, job: 'Developer', hobbies: ['eating', 'fishing', 'sleeping']};
    res.render('profile',{person: req.params.name , data: data}); // Ele recebe parametros a partir da URL e responde a ele dizendo que parametro ele pediu
});



app.listen(3000);