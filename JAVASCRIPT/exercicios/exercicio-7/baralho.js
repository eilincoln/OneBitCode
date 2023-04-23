const baralho = []
let opcao = ""

do {
    opcao = prompt(
        "Cartas no Baralho: " + baralho.length +
        "\n1. Adicionar uma carta\n2. Puxar uma carta\n 3. Sair"
    )
} while(opcao !== "3")

