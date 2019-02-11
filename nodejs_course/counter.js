// fazendo uma variável para contar quantos elementos existem no vetor

var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};
// comando para exportar o counter para outra file




var hello = function(){
    console.log("Hello World");
};

module.exports.hello = hello;
module.exports.counter = counter;