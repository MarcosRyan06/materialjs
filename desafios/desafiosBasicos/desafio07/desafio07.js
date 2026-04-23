var usuario = prompt("Digite seu nome:");
alert(`seja bem vindo(a) ${usuario}`);

var vitorias = Number(prompt(`${usuario}. Quantas partidas voce venceu?`));
var derrotas = Number(prompt(`${usuario}. Quantas partidas voce perdeu?`));
var pontos = Number(prompt(`${usuario}. Quantos pontos vale cada rodada?`));

var partidas = vitorias + derrotas;
var pontuacao = pontos * vitorias;
var percentual = (vitorias / partidas) * 100;

document.write(`${usuario}, voce jogou um total de ${partidas} partidas <br>`);
document.write(`${usuario}, sua pontuação final foi de ${pontuacao} <br>`);
document.write(`${usuario}, seu aproveitamento foi de ${percentual.toFixed(1)} % <br>`);
