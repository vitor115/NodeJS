var http = require('http')
/// envia hello world para o site
//var server = http.createServer(function(req, res){
 //   console.log("request was made: " + req.url);
 //   res.writeHead(200, {'Content-Type':'text/plain'});
  //  res.end('Hell0 W0rld');
//});

server.listen(3000, '127.0.0.1');
console.log('hello port 3000');
