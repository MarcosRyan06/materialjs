function converterParaFahrenheit(c){
var f = (c * 1.8) + 32
return f;
}
var resultado = converterParaFahrenheit(30);
document.write(`A temperatura em Fahrenheit ${resultado}`)