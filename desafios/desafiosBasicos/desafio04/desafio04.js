var usuario = prompt("Deigite seu nome: ");
alert(`Seja bem vindo ${usuario}`);

var indetificacao = prompt(`${usuario}, voce seria o Piloto, Comissário ou Passageiro`).toLowerCase();
var messagem = "";



switch(indetificacao){
    case "piloto":
    case "comissário":
    case "comissario":
        messagem = "Acesso liberado à área de tripulação. Boa viagem";
        break;
    case "passageiro":
            let viagem = prompt(`${usuario}, qual e seu destino? São paulo, Nova York ou Paris.`).toLowerCase();
            let menssagemDestino = "";
            switch (viagem) {
                case "sao paulo":
                case "são paulo":
                    menssagemDestino = `${usuario}, vá para o portão A - Embarque imediato`;
                    break;
                case "nova york":
                    menssagemDestino = `${usuario} vá para o portão B - Aguarde a Chamada`;
                    break;
                case "paris":
                    menssagemDestino = `${usuario} Voo atrasado em 30min, vá ao portão C`;
                    break;
                default:
                    menssagemDestino = `${usuario} destino não listado no totem. Vá ao guinchê físico`;
                    break;
            }
            document.write(menssagemDestino);
        break;
    default:
        messagem = "Acesso negado, Procure a segurança";
        break;
}
document.write(messagem);
