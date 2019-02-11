
// importação do contador a partir do app 
var counter = require('./counter');

console.log(counter.counter(['shaun', 'crystal', 'ryu']));

counter.hello()

var fs = require('fs');
var readME = fs.readFileSync('readme.txt','utf8');
console.log(readME);