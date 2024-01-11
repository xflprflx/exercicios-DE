var numero = "5(1)9-876-543-21";

var numerosApenas = numero.replace(/\D/g, '');

var numeroFormatado = `(${numerosApenas.slice(0, 2)})_${numerosApenas[2]}_${numerosApenas.slice(3, 7)}-${numerosApenas.slice(7)}`;

console.log(numeroFormatado);
