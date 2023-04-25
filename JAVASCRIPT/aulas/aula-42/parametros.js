function dobro(x) {
    alert(`O dobro de ${x} é: ${x * 2}`)
}

// dobro(5)
// dobro(6)

function criarUsuario(nome, email, senha, tipo = "admin"){
    const usuario = {
        nome, // mesma coisa que (nome: nome) -> posso usar assim quando repete a mesma coisa 
        email, 
        senha, 
        tipo
    }
    console.log(usuario)
}

criarUsuario(
    "Lincoln", 
    "lincoln@mail.com",
    "1234"
)

