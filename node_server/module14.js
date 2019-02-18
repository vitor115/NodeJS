//Geração de arquivos a partir de stream

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); //declara que o my read stream vai receber a partir da função create read streem o read me e para nao receber em buffers declaramos o utf8

function lerArquivo(chunck){

    //console.log('new chunck received:');
    //console.log(chunck)
}

myReadStream.on('data', lerArquivo); //colocando a variavel para funcionamento com o "on" e a função ler arquivo

let chunck = myReadStream.on('data');
console.log(' eita');
console.log(chunck);