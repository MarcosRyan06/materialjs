//Estrada de dados
var usuario = prompt("Digite seu nome: ");
//Saida de boas vindas
alert(`Seja bem vindo ${usuario}`);

//Entrada de dados
var anoNascimento = Number(prompt("Digite seu ano de nascimento: "));
var hora = Number(prompt("digite a hora atual entre 0 a 23"));
var idade = 2026 - anoNascimento;

//mensagem em forma de função para saber se a pessoa pode ou não dirigir
function dirigir(){
    if(idade >= 18){
        document.write(`Voce Tem idade para dirigir ${usuario}`);
    }else{
        document.write(`infelizmente ${usuario}, voce ainda não pode dirigir`);
    }    
}

//Trabalhando os dados 
if(hora <= 5){
    document.write(`Madrugada Boa ${usuario} <br>`);
    document.write(`parabens voce tem ${idade} anos <br>`);
    dirigir();
}else if(hora <= 11){
    document.write(`Bom dia ${usuario}, ja tomou o café? <br>`);
    document.write(`parabens voce tem ${idade} anos <br>`);
    dirigir();
}else if(hora <= 18){
    document.write(`Boa Tarde ${usuario}, tenha um otimo dia <br>`);
    document.write(`parabens voce tem ${idade} anos <br>`);
    dirigir();
}else{
    document.write(`Boa noite ${usuario}, ate amanha <br>`);
    document.write(`parabens voce tem ${idade} anos <br>`);
    dirigir();
}


/*Parando para pensar em poderia chamar a função dirigir() fora desses
if/else pois meio que ele não estao sendo traabalhado neles e eu poderia 
econnomizar liha de codigo
*/