var aluno = prompt("Digite seu nome Aluno(a)");
alert(`Seja bem vindo(a) a academia digital ${aluno}`);

var peso;
do{
    peso = Number(prompt(`${aluno}, digite o peso que vai levantar (1kg a 100kg):`));
    if(isNaN(peso) || peso < 1 || peso > 100){
        alert(`${aluno}, peso invalido. Tente novamente:`);
    }
}while(isNaN(peso) || peso < 1 || peso > 100){

    var repeticao = Number(prompt("Quantas repetições vão ser feitas?"));
    var contador = 1;

    document.write(`<h2>Ficha de Treino - Aluno</h2> ${aluno}`);
    document.write(`<p>Carga selecionada ${peso}</p><br>`);

    while (contador <= repeticao){
        if(contador === repeticao){
            document.write(`Repetição ${contador}: <b>ÚLTIMA REPETIÇÃO</b> dê o seu maximo <br>`)
        }else{
            document.write(`Repetição ${contador}: força.....! <br>`);
        }
        contador ++;
    }
}
document.write(`<strong>Treino finalizado, ${nome}! Você levantou ${peso}kg com sucesso.</strong>`)