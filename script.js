let number = Number(prompt("Insira o valor da compra:")); //Guarda o valor da compra

let resul; //Cria a variável resul

let desc = number * 0.02 //Essa variável guarda o desconto da compra 

if (isNaN(number)) { // Verifica se a variável number é um número, se não for ele barra o usuario
    alert("Você não digitou um número.")
}
else { // Se for, ele verifica se é maior/igual a 150
    if (number >= 150) { //Se for ele dará desconto e informa o valor final
        resul = number - desc;
        alert(`O valor do desconto é de ${desc.toFixed(2)} reais, portanto o valor final é de ${resul} reais.`)
    }
    else { //Se não, ele dará cashback e informa o valor final
        alert(`O valor do cashback é de ${desc.toFixed(2)} reais, portanto o valor total é de ${number} reais`)
    }
}