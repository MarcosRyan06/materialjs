var usuario = prompt("Digite seu Usuario: ").toLowerCase();
var mensagem

switch(usuario){
    case "admin":
        mensagem = "Bom dia Chefe!"
        break;
    case "gerente":
        mensagem = "Bom dia! seja bem vindo"
        break;
    case "encarregado":
        mensagem = "Bom Dia, olhe a escala urgente"
        break;
    default:
        mensagem = "Usuario não encontrado"
}
window.alert(mensagem)

/*Bem o metodo .toLowerCase e o .toUpperCase, servem para facilitar a vida do usuario pq sabemos que alem
deles não escreverem certo, eles não tem consciencia do conteudo por tras da pagina e esses metodo
ajuda o codigo a enteder se  Palavra em questao e maiuscula ou minuscula, mas para isso na parte do case
a palavra inteira tem que ta escrita maiuscula ou minuscula assim o codigo entende legal
*/