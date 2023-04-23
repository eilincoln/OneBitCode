const primeiroNome = prompt('Escreva seu primeiro nome:');
const segundoNome = prompt('Escreva seu sobrenome: ');
const campoEstudo = prompt('Agora me diz, qual seu campo de estudo?');
const anoNascimento = prompt('Qual seu ano de nascimento?');
let idade;

idade = 2023 - parseFloat(anoNascimento);

console.log(
  `Olá ${primeiroNome} ${segundoNome} você estuda: ${campoEstudo}? É isso mesmo? e sua idade é ${idade}`,
);
