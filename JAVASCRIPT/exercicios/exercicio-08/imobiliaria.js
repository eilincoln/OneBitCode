const imoveis = [] // Para poder armazenar os dados
let opcao = "" // para ter a opcao de escolha


// loop para poder fazer o menu funcionar
do {
    opcao = prompt(
        `Bem-vindo(a) ao Cadastro de Imóveis\n
        Total de Imóveis: ${imoveis.length}

        Escolha uma opção: 
        1. Novo Imóvel
        2. Listar Imóveis
        3. Sair
        `)

    switch(opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
            imovel.quartos = prompt("Quantos quartos possui o imóvel:")
            imovel.banheiros = prompt("Quantos banheiros possui o imóvel: ")
            imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

            const confirmacao = confirm(
                `Salvar este imóvel?
                Proprietário: ${imovel.proprietario}
                Quartos: ${imovel.quartos}    
                Banheiros: ${imovel.banheiros}
                Possui garagem: ${imovel.garagem}
                `)

            if(confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel salvo com Sucesso!!! :)")
            } else {
                alert("Voltando ao menu inicial...!")
            }

            break
        case "2":
            for (let i = 0; imoveis.length < 0; i++) {
                alert(
                    "Imóvel" + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui Garagem: " + imoveis[i].garagem
                )
            }

            break
        case "3":
            alert("Encerrando Programa....")
            break
        default:
            alert("Opção Iválida!!")
    }
} while (opcao !== "3")