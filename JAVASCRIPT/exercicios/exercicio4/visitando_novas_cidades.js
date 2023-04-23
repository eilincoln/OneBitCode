const turista = prompt('Eae turista! Qual é seu nome?');
let cidades = '';
let contagem = 0;

let continuar = prompt('Você visitou alguma cidade? (Sim ou Não)');

while (continuar === 'Sim') {
  let cidade = prompt('Qual é o nome da cidade?');
  cidades += ' - ' + cidade + '\n';
  contagem++;
  continuar = prompt('Você visitou alguma outra cidade? Sim ou Não');
}

alert(`
  Turista: ${turista}
  Quantidade de Cidades viajadas: ${contagem}
  Cidades visitadas: 
  ${cidades}
`);
