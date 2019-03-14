var express = require('express');
var app = express();
var bodyParser = require('body-parser')
//var conta = addConta;
var conta = [];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())


//JSON.stringfy(contas);
function home(req, res) {
    console.log("Bem vindo ao banco");
    res.end("bem vindo ao banco!");
}

function getConta(req, res) {
    //res.end("lets groove!")
    res.end('Menu de criacao de contas (em breve) "atualmente feito pelo postman" ');
}
/**
 * 
 * @description Adiciona contas através do 
 *  
 */
function addConta(req, res) {
    //console.log("chegamos")
    conta = req.body;

    
    res.send('Request to open a new acount in node bank received it will be aproved soon...');
}

function showConta(req, res) {
    
    console.log("Conta requisitada: "+conta[req.params.id].Name);
    
    res.json(conta[req.params.id]);
};

/**
 * 
 * @description altera a conta ao receber a requisição pelo metodo put 
 * 
 */

function changeConta(req, res){
    console.log("Alteracoes: ")
    console.log(req.body.Name);
    conta[req.params.id].Name =req.body.Name;



}

/**
 * @description sacar conta específica
 */
function saqueConta(req, res){
    console.log("implementar")

}

function transferConta(req, res){
    console.log("implementar")

}
/* function changeView(req,res){
    res.end('Menu de alteracao de contas (em breve) "atualmente feito pelo postman')

} */
app.get('/', home);
app.get('/conta', getConta);
app.post('/conta', addConta);




app.get('/conta/:id', showConta);





app.put('/conta/:id/', changeConta);
//app.get('/conta/:id/edit', changeView);
app.post('/conta/:id/saque', saqueConta);
app.post('/conta/:id/transfer/:id', transferConta);


app.listen(3000);