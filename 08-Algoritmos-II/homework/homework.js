"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var pivot = array[0];
  var left = [];
  var right = [];

  if (array.length <= 1) {
    return array;
  }

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //_mergeArrays une ambos arrays
  const _mergeArrays = (left, right) => {
    const c = [];

    while (left.length && right.length) {
      c.push(left[0] > right[0] ? right.shift() : left.shift());
    }

    //si todavía tenemos valores, agréguelos al final de `c`
    while (left.length) {
      c.push(left.shift());
    }
    while (right.length) {
      c.push(right.shift());
    }
    return c;
  };

  if (array.length <= 1) return array;

  let mid = parseInt(array.length / 2);

  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);

  return _mergeArrays(mergeSort(left), mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
