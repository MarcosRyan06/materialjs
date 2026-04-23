var nome = "Ryan";
var idade = 20;

console.log(`${nome} tem ${idade} anos`);

//O console.log aparece apenas para os devs e não usuarios
//Ele serve para testes rapidos e depuração de codigo

var tabuada = 5;
for(let i = 1; i <= 10; i++){
    let total = tabuada * i;
    console.log(`${tabuada} x ${i} = ${total}`);
}