var resultado = document.getElementById("resultado")

function soma(){
    //Entrada
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);

    //Processamento
    var soma = n1 + n2;

    //Saida
    resultado.innerText = "O resultado da soma é " + soma;
}

function multiplicacao(){
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);

    var multiplicacao = n1 * n2;

    resultado.innerText = "O resultado da multiplicação é " + multiplicacao;
}

function sub(){
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);

    var sub = n1 - n2;

    resultado.innerText = "O resultado da subtração é " + sub;

}

function div(){
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);

    var div = n1 / n2;

    resultado.innerText = "O resultado da divisão é " + div;
}