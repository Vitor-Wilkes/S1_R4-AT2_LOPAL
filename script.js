let number = Number(prompt("Insira o valor da compra:"));

let resul;

let desc = number * 0.02

if (isNaN(number)) {
    alert("Você não digitou um número.")
}
else {
    if (number >= 150) {
        resul = number - desc;
        alert(`O valor do desconto é de ${desc} reais, portanto o valor final é de ${resul} reais.`)
    }
    else {
        alert(`O valor do cashback é de ${desc} reais, portanto o valor total é de ${number} reais`)
    }
}