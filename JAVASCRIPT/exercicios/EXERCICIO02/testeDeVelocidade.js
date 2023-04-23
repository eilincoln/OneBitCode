// Pegando dados para análise
const nomeCarroUm = prompt('Digite o nome do primeiro carro:');
const velocidadeCarroUm = prompt(
  'Digite a velocidade do primeiro carro em KM:',
);
const nomeCarroDois = prompt('Digite o nome do segundo carro:');
const velocidadeCarroDois = prompt(
  'Digite a velocidade do segundo carro em KM:',
);

// Fazendo processamento dos dados
if (velocidadeCarroUm > velocidadeCarroDois) {
  alert(`Carro 1 é mais rápido:\n
    CARRO: ${nomeCarroUm}\n
    VELOCIDADE: ${velocidadeCarroUm}Km/h
  `);
} else if (velocidadeCarroUm < velocidadeCarroDois) {
  alert(`Carro 2 é mais rápido:\n
    CARRO: ${nomeCarroDois}\n
    VELOCIDADE: ${velocidadeCarroDois}Km/h
  `);
} else {
  alert(`A velocidade dos carros são iguais!!!`);
}
