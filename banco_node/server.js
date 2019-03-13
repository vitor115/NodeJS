var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var conta = addConta;

var conta = {}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//JSON.stringfy(contas);
function home(req, res){
    console.log("Bem vindo ao banco");
    res.end("bem vindo ao banco!");
}

function getConta(req,res) {
    //res.end("lets groove!")
    res.end('Menu de criacao de contas (em breve) "atualmente feito pelo postman" ');
}
function addConta(req,res) {
    //console.log("chegamos")
    conta =req.body;
    
    console.log(conta); // teste de recebimento de contas ao imprimir no console
    res.send('Request to open a new acount in node bank received it will be aproved soon...');
}

function showConta(req,res,conta) {
    json.end(conta[id]);
}

app.get('/', home);
app.get('/conta',getConta );
app.post('/conta', addConta);
app.get('/conta/:id', showConta);



app.listen(3000);





