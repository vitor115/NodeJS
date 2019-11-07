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
    //console.log("Bem vindo ao banco");
    res.end("bem vindo ao banco!");
}

function getConta(req, res) {
    //res.end("lets groove!")
    res.end('Menu de criacao de contas (em breve) "atualmente feito pelo postman" ');
}
/**
 * 
 * @description Adiciona contas através do postman
 *  
 */
function addConta(req, res) {
    //console.log("chegamos")
    conta = req.body;

    
    res.send('Request to open a new account in node bank received it will be aproved soon...');
}

/**
 * 
 * @description mostra a conta requisitada pelo metodo get 
 * 
 */

function showConta(req, res) {
    
    //console.log("Conta requisitada: "+ conta[req.params.id].Name);
    
    res.json(conta[req.params.id]);
};

/**
 * 
 * @description altera a conta ao receber a requisição pelo metodo put 
 * 
 */

function changeConta(req, res){
    //console.log("Alteracoes: ")
    //console.log(req.body.Name);
    conta[req.params.id].Name =req.body.Name;


}

/**
 * @description sacar conta específica
 */
function saqueConta(req, res){
    var currentValue = conta[req.params.id].Balance;
    var reqValue = req.body.valor;
    if (reqValue>currentValue){
        console.log("Error: Insuficient Balance");
        res.send("Saldo insuficiente...");
    }
    else{
        currentValue = currentValue - reqValue;
        conta[req.params.id].Balance = currentValue;
        console.log("Withdraw succefully made");
        res.send("Saldo atual: "+ currentValue);
    }


}



function viewSaque(req, res) {
    res.end("Visão da tela de Saque!");
}

function transferConta(req, res){
    console.log("abaixo tranferencia");
    console.log(req.params);
    //var currentValue = conta[req.params.id].Balance;
    var currentValue = conta[req.params.idTransferidor].Balance; //Saldo do transferidor
    var reqValue = req.body.valor; //valor transferido
    var receptorValue = conta[req.params.idReceptor].Balance; //saldo do receptor
    if (reqValue>currentValue){
        //console.log("Error: Insuficient Balance");
        res.send("Saldo insuficiente...");
    }
    else{
        currentValue = currentValue - reqValue;
        conta[req.params.idTransferidor].Balance = currentValue;
        receptorValue = receptorValue + reqValue;
        conta[req.params.idReceptor].Balance = receptorValue;
        console.log("Withdraw succefully made" + receptorValue);
        res.send("Saldo atual: "+ currentValue)

    }

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

//Não implementados
app.post('/conta/:id/saque', saqueConta);
app.get('/conta/:id/saque', viewSaque);
//app.post('/conta/:id/transfer/:idt', transferConta);
app.post('/conta/:idTransferidor/transfer/:idReceptor', transferConta);


app.listen(3000);