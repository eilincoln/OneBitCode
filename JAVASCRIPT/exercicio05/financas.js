let saldo = prompt('Informe a quantidade de dinheiro inicial:');
saldo = parseFloat(saldo);
let opcao = '';

do {
  opcao = prompt(
    'Saldo disponivel: R$' +
      saldo +
      '\n1. Adicionar dinheiro' +
      '\n2. Remover dinheiro' +
      '\n3. SAIR',
  );

  switch (opcao) {
    case '1':
      saldo += parseFloat(prompt('Informe o valor para adicionar:'));
      break;
    case '2':
      saldo -= prompt('Informe o valor a ser removido:');
      break;
    case '3':
      alert('Saindo....');
      break;
    default:
      alert('Entrada Inválida');
  }
} while (opcao !== '3');
