function calcular(){
var bairro = document.getElementById("setor").value //tag select
var entrega;
var resultado = document.getElementById("res") //tag p

switch(bairro){
    case "Aricanduva":
        entrega = 10.00;
        //resultado.innerHTML = "Sua entrega para o bairro " + bairro + " custará " + entrega;
        resultado.innerHTML = `Sua entrega para o bairro ${bairro} custará ${entrega}`;
        break;
    case "Nhocune":
        entrega = 12.00;
        //resultado.innerHTML = "Sua entrega para o bairro " + bairro + " custará " + entrega;
        resultado.innerHTML = `Sua entrega para o bairro ${bairro} custará ${entrega}`;
        break;
    case "Arthur Alvim":
        entrega = 15.00;
        //resultado.innerHTML = "Sua entrega para o bairro " + bairro + " custará " + entrega;
        resultado.innerHTML = `Sua entrega para o bairro ${bairro} custará ${entrega}`;
        break;
    case "Patriarca":
        entrega = 20.00;
        //resultado.innerHTML = "Sua entrega para o bairro " + bairro + " custará " + entrega;
        resultado.innerHTML = `Sua entrega para o bairro ${bairro} custará ${entrega}`;
        break;
    case "Savoy":
        entrega = 13.00;
       //resultado.innerHTML = "Sua entrega para o bairro " + bairro + " custará " + entrega;
       resultado.innerHTML = `Sua entrega para o bairro ${bairro} custará ${entrega}`;
        break;
    default:
        entrega = 50.00;
        //resultado.innerHTML = "Sua entrega para o bairro " + bairro + " custará " + entrega;
        resultado.innerHTML = `Sua entrega para o bairro ${bairro} custará ${entrega}`;
        break;
} 
}