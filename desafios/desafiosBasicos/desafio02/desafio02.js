var nome = prompt("Digite seu nome: ");
window.alert(`Olá ${nome}, seja bem vindo ao sistema`);

var idade = Number(prompt("Digite sua idade"));
var salario = Number(prompt("Digite seu salario mensal"));

if (idade >= 21 && idade <= 60 && salario >= 2000) {
  window.alert(`Parabéns ${nome}, seu crédito foi aprovado`);
} else {
  window.alert(`Desculpe ${nome}, você não atende aos requisitos mínimos.`);
}
console.log(`Tipo da variável nome ${typeof nome}`);
console.log(`Tipo de variável idade ${typeof idade}`);
console.log(`tipo de variavel salario ${typeof salario}`);
