var nome = prompt("Digite seu nome");
window.alert( `Bem vindo ao sistema ${nome}`);

var nota1 = Number(prompt(`Digite sua primeira nota ${nome}`));
var nota2 = Number(prompt(`Digite sua segunda nota ${nome}`));
var nota3 = Number(prompt(`Digite sua terceira nota ${nome}`));

var media = (nota1 + nota2 + nota3) / 3;

if(media > 7){
    window.alert(`Aluno ${nome}, foi aprovado com a media ${media.toFixed(1)}`);
}else if(media >= 5){
    window.alert(`Aluno ${nome}, esta de recuperção com a media ${media.toFixed(1)}`);
}else{
    window.alert(`Aluno ${nome}, foi reprovado com a media ${media.toFixed(1)}`);    
}