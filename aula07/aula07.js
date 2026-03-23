var usuario = prompt("Digite seu nome: ");
var valor = Number(prompt(usuario + " Digite alguma tabuada do 1 ao 10"));
var contador = 1;

/* Esse while(true) serve para manter o loop infinito ate o usuario acertar conforme o codigo manda
porem ele meio que tem que ter um if e else de acompanhamento para manter as condições o if deixa
ele no loop infinito instruido o usuarui ate acertar e o else tem um break isso serve para quando tudo estiver certo dentro do loop
o codigo consiga da sequencia para o usuario */
while(true){
    if(isNaN(valor) || valor < 0 || valor > 10){
        window.alert("Tabuada invalida " + usuario);
        valor = Number(prompt("Digite alguma tabuada do 1 ao 10 " + usuario));
    }else{
        break;
    }
}
while(contador <= 10){
    var resultado = valor * contador;
    document.write(valor + " x " + contador + " = " + resultado + "<br>");
    contador ++;
}

/*
Bem como podemos ver o while e um sistemas de repetição quando eu coloco a var contador ou i tanto faz
ele como a "repetir", porem meio que e uma contagem do valor que eu coloco no prompt, agr se não tiver isso igual na lição passada
ele vai repetir a mesma mesngaem o numero de vezes que foi amazernado no var do prompt

*/