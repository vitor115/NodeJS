var express = require('express');
var app = express();
var bodyParser = require('body-parser')
//var conta = addConta;
//var conta = [];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

var contas = [];
var produtos = [];

function Home(req,res) {
    res.send("Bem vindo ao mercado Vieira!");
}


function viewConta (req, res){
    res.end("Esta e sua conta");

}

function criarConta (req, res){
    contas = req.body;
    console.log("Accounts Created");
    res.send("Contas criadas, obrigado pela preferencia")
}

function atualizaConta (req, res){
    contas[req.params.id].nome = req.body.nome;
    contas[req.params.id].idade = req.body.idade;
    res.send("Conta Atualizada com sucesso!");
}

function vizualizarConta (req, res){
    res.send(contas[req.params.id])
}

// function viewCreditos (req, res){
//     console.log(contas[req.params.id].credits);
//     var x = contas[req.params.id];
//     res.end(x);
// }

function saqueConta (req, res){
    var valorAtual = contas[req.params.id].credits;
    var valorPedido = req.body.valor;

    if (valorPedido > valorAtual){
        res.send("Saldo insuficiente para saque.");
    }else{
        valorAtual -= valorPedido;
        contas[req.params.id].credits = valorAtual;
        res.send ("Saldo: R$ "+ valorAtual);
    }
}

function postProdutos(req, res){
    if(contas[req.params.id].tipo == "adm"){
        produtos=req.body;
        res.send("Produtos armazenados com sucesso!");
    }
    else{
        res.send("boa tentativa malandro mas você é " + contas[req.params.id].tipo + ", burro!")
    }

}

function viewProdutos (req, res){
    res.send(produtos);
}

function compraProduto (req, res){
    var qtdEstoque = produtos[req.params.idproduto].qtde;
    var qtdRequerido = req.body.qtde;  
    var preco = produtos[req.params.idproduto].valor;
    var saldo = contas[req.params.idcomprador].credits;
    var valorFinal=0;
    console.log(saldo+" "+preco+" "+qtdEstoque+" "+qtdRequerido);
    if (qtdRequerido > qtdEstoque){
        res.send("Quantidade insuficiente no estoque.");
    }
    else{
        if (req.params.idproduto == 0 && qtdRequerido >=3){
            preco = 40.00;
            valorFinal = qtdRequerido * preco;
            //qtdEstoque = qtdEstoque - qtdRequerido;
            //res.send('Preço:'+ valorFinal + 'Quantidade final no estoque:' + qtdEstoque);
            if (valorFinal > saldo){
                res.send('Saldo insuficiente.');
            }
            else{
                saldo = saldo - valorFinal;
                contas[req.params.idcomprador].credits = saldo;
                qtdEstoque = qtdEstoque - qtdRequerido;
                //console.log(qtdEstoque)
                //contas[req.params.idproduto].qtde = qtdEstoque;
                //console.log(contas[req.params.idproduto].qtde+" e "+qtdEstoque+" e "+qtdRequerido)
                res.send('Preço:'+ valorFinal + ' Quantidade final no estoque:' + qtdEstoque);
            }
        }
        else{
            valorFinal = qtdRequerido * preco;
            if (valorFinal > saldo){
                res.send('Saldo insuficiente.');
            }
            else{
                saldo = saldo - valorFinal;
                contas[req.params.idcomprador].credits = saldo;
                qtdEstoque = qtdEstoque - qtdRequerido;
                contas[req.params.idproduto].qtde = qtdEstoque;
                res.send('Preço:'+ valorFinal + 'Quantidade final no estoque:' + qtdEstoque);
            }
        }
            
    }
    
    
}





app.get('/', Home);
app.get('/conta', viewConta);
app.post('/conta', criarConta);
app.put('/conta/:id', atualizaConta);
app.get('/conta/:id', vizualizarConta);
//app.get('/conta/:id/creditos', viewCreditos);
app.put('/conta/:id/saque', saqueConta);
app.post('/:id/produtos', postProdutos);
app.get('/produtos', viewProdutos);
// app.get('/')
app.put('/conta/:idcomprador/compra/:idproduto', compraProduto);




app.listen(3000);