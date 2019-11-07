//HTML para o servidor atraves de pipe

var http = require('http');
var fs = require('fs');




var server = http.createServer(function(req, res){ // o request é a file com todo o texto e a resposta é a writable stream
    console.log("request was made: " + req.url); //informar as requisições de pagina
    res.writeHead(200, {'Content-Type':'application/json'}); // informano o tipo de conteudo
    var Obj = {
        name: 'Vitor',
        job: 'Developer',
        age: 18
    };
    res.end(JSON.stringify(Obj));
});

server.listen(3000, '127.0.0.1');
console.log('hello port 3000');