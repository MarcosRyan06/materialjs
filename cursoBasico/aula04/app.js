var tipoUsuario = prompt("Digite sua posição.  CEO Gerente Encarregado funcionario");
var messagem;

switch(tipoUsuario){
    case "CEO":
        messagem = "Bem vindo chefe, o senhor tem uma reunião marcada para as 09h ";
        break;
    case "Gerente":
        messagem = "Olá Gerente, os relatórios da equipe ja estao disponiveis";
        break;
    case "Encarregado":
        messagem = "Bom Dia, Verefica a montagem da escala da semana";
        break;
    case "Funcionario":
        messagem = "Bom trabalho! Não esqueça de bater o ponto ";
        break;
    default:
        messagem = "Cargo não encontrado. Por favor ir ate a sala do RH";
}

window.alert(messagem)