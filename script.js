let number = Number(prompt("Insira seu número:")); //Essa variável guarda o número a ser verificado

let resul = number % 2 //Essa verifica o resto do número divido por 2

if (isNaN(resul)) { //Verifica se a variável número é um número, se não for ele barra o usuario
    alert("Você não digitou um número.")
}
else { //Se for, ele contina o codigo
    if (resul == 0) { // Se o resto for 0, ele informa que o número é par
        alert("Seu número é par")
    }
    else { // Se não for, ele informa que é ímpar
        alert("Seu número é ímpar")
    }
}