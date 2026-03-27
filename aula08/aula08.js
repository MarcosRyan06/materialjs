/**
 Laço for utilizamos quando sabemos a quantidade exata de repetições que irá
 acontecer no nosso laço

 for(1° PARTE; 2°PARTE; 3°PARTE){
 Blolco de comandos
 
 }
 1° PARTE - Inicialização
 2° PARTE - Condição de Continuidade
 3° PARTE - Alteração de variavel de controle

 Exemplo 
 var c =1
 for(c = 1; c <=10; c ++){
 document.write(c)
 }
 */



var numero = Number(prompt("Digite um número de 1 a 10"));

if (isNaN(numero) || numero < 1 || numero > 10) {
  alert("Tabuada inválida");
} else {
  for (var contador = 1; contador <= 10; contador++) {
    var resultado = numero * contador;
    document.write(numero + " x " + contador + " = " + resultado + "<br>");
  }
}
