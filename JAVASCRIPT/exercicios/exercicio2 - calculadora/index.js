const numero1 = prompt('Digite o primeiro numero:');
const numero2 = prompt('Digite o segundo numero:');

soma = parseFloat(numero1) + parseFloat(numero2);
subtracao = parseFloat(numero1) - parseFloat(numero2);
divisao = parseFloat(numero1) / parseFloat(numero2);
multiplicacao = parseFloat(numero1) * parseFloat(numero2);

window.alert(`Os resultados são\n
       Soma: ${soma}\n
       Subitração: ${subtracao}\n
       Divisão: ${divisao}\n
       Multiplicação: ${multiplicacao}\n
`);
