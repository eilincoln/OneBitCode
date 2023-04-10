const turista = prompt('Eae turista! Qual é seu nome?');
let cidades = '';
let contagem = 0;

let continuar = prompt('Você visitou alguma cidade? (Sim ou Não)');

while (continuar === 'Sim') {
  let cidade = prompt('Qual é o nome da cidade?');
  cidades += ' - ' + cidade + '\n';
}
