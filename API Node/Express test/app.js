//exemplo de module router

var express = require("express");
var app = express();
var birds = require('./birds');

app.use(birds);

app.listen(3000);