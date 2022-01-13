const { clear } = require('console');
const { constants } = require('perf_hooks');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b,c] = input.split('\n').map(Number);
var funcionario =( b * c) ;
var soma = funcionario;
var result= soma.toFixed(2)


process.stdout.write(`NUMBER = ${a}\n`);
process.stdout.write(`SALARY = U$ ${result}\n`);

