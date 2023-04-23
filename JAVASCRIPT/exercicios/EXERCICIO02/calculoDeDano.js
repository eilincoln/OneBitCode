//colhendo dados do atacante
const atacante = prompt('qual é o nome do personagem atacante?');
const poderDeAtaque = prompt('qual é seu poder de ataque?');

//colhendo dados do defensor
const defensor = prompt('qual é o nome do personagem defensor?');
let pontosDeVida = prompt('quantos pontos de vida ele possui?');
const poderDeDefesa = prompt('qual é seu poder de defesa?');
const possuiEscudo = prompt('ele possui escusdo? (sim ou não)');

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === 'não') {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === 'sim') {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert(`${atacante} causou ${danoCausado} pontos de dano em ${defensor}`);
alert(`
  ${atacante} \nPoder de ataque: ${poderDeAtaque} \n\n
  ${defensor} \nPoder de vida: ${pontosDeVida} \nPoder de defesa ${poderDeDefesa}
  \nPossui escudo? ${possuiEscudo}
`);
