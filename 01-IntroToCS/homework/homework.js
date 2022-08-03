'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let decimal = 0;
  let binario = [];
  binario = num.split('').reverse();

  for (let i = 0; i < binario.length; i++) {
    decimal += binario[i] * Math.pow(2, i);
  }

  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let res = 0;
  let a_residuo = [];

  do {
    res = num % 2;
    a_residuo.unshift(res);
    num = Math.floor(num / 2);
  } while (num > 0);

  return a_residuo.join('');
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}