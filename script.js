let number = Number(prompt("Insira sua altura:"));

if (isNaN(number)) {
    alert("Você não digitou um número.")
}
else {
    if (number >= 1.5) {
        alert("Pode entrar no brinquedo.")
    }
    else {
        alert("Acesso negado.")
    }
}