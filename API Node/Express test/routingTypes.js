var express = require('express');
var app = express();

//recebe requisições com quantos b's forem colocados: /abcd /abbbbcd /abbbcd

// app.get('/ab+cd', function(req, res) {
//     res.send('ab+cd');
// });

//recebe requisições com qualquer coisa no meio entre o ab e o cd: abRANDOMcd

//  app.get('/ab*cd', function(req, res) {
//     res.send('ab*cd');
// });
  

//recebe requisições com o cd faltando ou não:  /abe e /abcde.

// app.get('/ab(cd)?e', function(req, res) {
//     res.send('ab(cd)?e');
// }); 

//Este caminho de rota irá corresponder a qualquer coisa com um “a” no nome.

// app.get(/a/, function(req, res) {
//     res.send('/a/');
// });


//Este caminho de rota irá corresponder a butterfly e dragonfly, mas não a butterflyman, dragonfly man, e assim por diante.

// app.get(/.*fly$/, function(req, res) {
//     res.send('/.*fly$/');
// });

//


app.listen(3000);