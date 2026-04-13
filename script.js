let number = Number(prompt("Insira sua altura:")); //Guarda o valor da altura

if (isNaN(number)) { //Verifica se a variável number é um número, se não for ele barra
    alert("Você não digitou um número.")
}
else { //Se for, ele verifica se a altura é maior/igual que 1.5 metros
    if (number >= 1.5) { //Se for ele informa que é permitido entrar
        alert("Pode entrar no brinquedo.")
    }
    else { //Se não, ele nega o acesso
        alert("Acesso negado.")
    }
}