var express = require('express');
var app = express();
var bodyParser = require('body-parser')
//var conta = addConta;
var conta = [];

app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

var frutas = [];

function Home(req,res) {
    res.send("Bem vindo ao hortifruti do Grande Leandrinho!");
}

function cadastrarFrutas(req,res){
    frutas = req.body;
    res.send("frutas armazenadas com sucesso!");
}

function mostrarFrutas(req,res){
    res.send(frutas);

}

app.get('/', Home);
app.post('/',cadastrarFrutas);
app.get('/frutas', mostrarFrutas);

app.listen(3000)