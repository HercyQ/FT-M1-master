'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

}

function DecimalABinario(num) {
  // tu codigo aca
  let resultado = 0;
  let res = 0;
  let a_res = [];

  do {
    resultado = Math.floor(num / 2);
    res = num - (resultado * 2);
    a_res.push(res);
    num = resultado;
  } while (resultado !== 0);
  
  a_res.reverse();

  return a_res.join('');
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}