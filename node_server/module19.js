// Criando streams para escrita

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){ // criando o servidor como server
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);

    }
    else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url === '/api/json'){
       var  persons = [{name:'Vitor' , age:18}, {name:'Erick', age: 20}, {name:'Andressa', age: 20}];
       res.writeHead(200,{'Content-Type': 'application/json'});
       res.end(JSON.stringify(persons));
       
    }else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);

    }
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');