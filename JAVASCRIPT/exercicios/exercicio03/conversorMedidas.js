const valorEmMetros = prompt('Digite o valor em METROS a ser convertido: ');
const opcaoConversao = prompt(`Digite a opção desejada:\n 
1) milímetro (mm)
2) centímetro (cm)
3) decímetro (dm)
4) decâmetro (dam)
5) hectômetro (hm)
6) quilômetro (km)
`);

switch (opcaoConversao) {
  case '1':
    alert(`Resultado é: ${valorEmMetros}m = ${valorEmMetros * 1000}mm`);
    break;
  case '2':
    alert(`Resultado é: ${valorEmMetros}m = ${valorEmMetros * 100}cm`);
    break;
  case '3':
    alert(`Resultado é: ${valorEmMetros}m = ${valorEmMetros * 10}dm`);
    break;
  case '4':
    alert(`Resultado é: ${valorEmMetros}m = ${valorEmMetros / 10}dam`);
    break;
  case '5':
    alert(`Resultado é: ${valorEmMetros}m = ${valorEmMetros / 100}hm`);
    break;
  case '6':
    alert(`Resultado é: ${valorEmMetros}m = ${valorEmMetros / 1000}km`);
    break;
  default:
    alert('OPÇÃO INVÁLIDA!');
}
