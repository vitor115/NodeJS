//HTML para o servidor atraves de pipe

var http = require('http');
var fs = require('fs');




var server = http.createServer(function(req, res){ // o request é a file com todo o texto e a resposta é a writable stream
    console.log("request was made: " + req.url); //informar as requisições de pagina
    res.writeHead(200, {'Content-Type':'text/html'}); // informano o tipo de conteudo
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8'); //declara que o my read stream vai receber a partir da função create read streem o read me e para nao receber em buffers declaramos o utf8
    myReadStream.pipe(res); //a partir da funcão pipe vc torna a readMe em Writable stream
});

server.listen(3000, '127.0.0.1');
console.log('hello port 3000');