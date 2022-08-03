'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

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