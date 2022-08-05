'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let result = 0;
  num = num.split('').reverse();

  for (let i = 0; i < num.length; i++) {
    result += parseInt(num[i]) * Math.pow(2, i);
  }

  return result;
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