//Writable Streams

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); //declara que o my read stream vai receber a partir da função create read streem o read me e para nao receber em buffers declaramos o utf8
var WritableStream = fs.createWriteStream(__dirname + '/writeMe.txt');


function lerArquivo(chunck){

    console.log('new chunck received:');
    WritableStream.write(chunck);// Recebe 'data' do arquivo referenciado (/readMe.txt) e ativa esse evento gerando outro arquivo com a mesma 'data' recebida em chuncks pelo buffer
}

myReadStream.on('data', lerArquivo); //colocando a variavel para funcionamento com o "on" e a função ler arquivo 