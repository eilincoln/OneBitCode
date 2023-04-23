let palavra_palindromo = prompt("Qual a alavra que tu tem dúvida")
let palabra_invertida = ""

for(let i = palavra_palindromo.length - 1; i >= 0; i--) {
    palabra_invertida += palavra_palindromo[i] 
}

if(palavra_palindromo === palabra_invertida) {
    alert(`
        É uma palavra palindroma: 
        ${palabra_invertida}
        ${palavra_palindromo}
    `)
} else {
    alert(`
        Não é uma palavra palindroma: 
        ${palabra_invertida}
        ${palavra_palindromo}
    `)
}