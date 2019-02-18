// importação do contador a partir do app 
var counter = require('./counter');
var fs = require('fs');

var x;

console.log(counter.counter(['shaun', 'crystal', 'ryu']));

counter.hello()

// leitura e escrita de files (9)

var readME = fs.readFileSync('readme.txt', 'utf8');
//console.log(readME);

function administrarDados(err, data) {
    if (err) {
        throw new Error('erro de leitura de dados' + err);
    }

    console.log('o dado é ' + data);
}

fs.readFile('readme.txt', 'utf8', administrarDados)

// exportação de texto para outro arquivo
//var readME = fs.readFileSync('readme.txt','utf8');
//fs.writeFileSync('writeMe.txt', readME);

// outro metodo para azer a leitura / escrita é a criaçãoi de funções para criar um codigo assicrono como terceiro argumento

// exemplo: //fs.writeFileSync('writeMe.txt', readME, function(err,data){
// console.log(data) });
