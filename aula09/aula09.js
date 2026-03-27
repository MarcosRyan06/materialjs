/**
 Funções
 Uma função é como um pequeno programa que executa uma tarefa dentro
 de um programa maior. Cada função possui linhas de instruções,
 que juntas formam o corpo da função. As linhas de instruções
 podem receber parâmetros que serão utilizados no 
 corpo da função para executar alguma instrução 
 */
function saudacao(){
    document.write("Olá Ryan! <br>");
}
saudacao();
saudacao();
saudacao();

document.write("<br>***************<br>");

function somar(a,b){
    return a + b;
}
var resultado = somar(10, 9);
document.write(resultado)

/**
 funções tambem serve para manter o codigo limpo, organizado, reutilizavel e profissional
 */