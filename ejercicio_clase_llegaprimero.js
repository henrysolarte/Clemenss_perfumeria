// Orden de llegada de los corredores según las pistas:
// C llegó después de B
// D llegó en medio de los corredores A y C

const corredores = ['A', 'B', 'C', 'D'];

// Genera todas las permutaciones posibles
function permutaciones(arr) {
  if (arr.length === 1) return [arr];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let resto = arr.slice(0, i).concat(arr.slice(i + 1));
    for (let p of permutaciones(resto)) {
      result.push([arr[i]].concat(p));
    }
  }
  return result;
}

const todas = permutaciones(corredores);

for (let orden of todas) {
  let posA = orden.indexOf('A');
  let posB = orden.indexOf('B');
  let posC = orden.indexOf('C');
  let posD = orden.indexOf('D');

  // C llegó después de B
  let regla1 = posC > posB;
  // D llegó exactamente en medio de A y C
  let regla2 = (posD === (posA + posC) / 2);

  if (regla1 && regla2) {
    console.log('El orden correcto de llegada es:', orden.join(', '));
    console.log('El ganador fue:', orden[0]);
    break; // Solo muestra un resultado
  }
}