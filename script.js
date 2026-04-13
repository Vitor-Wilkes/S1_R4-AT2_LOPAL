let number = Number(prompt("Insira seu número:"));

let resul = number % 2

if (isNaN(resul)) {
    alert("Você não digitou um número.")
}
else {
    if (resul == 0) {
        alert("Seu número é par")
    }
    else {
        alert("Seu número é ímpar")
    }
}