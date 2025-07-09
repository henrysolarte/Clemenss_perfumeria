const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let mujeres = [];

function pedirDatos(indice) {
  if (indice < 3) {
    rl.question(`Ingresa el nombre de la mujer ${indice + 1}: `, (nombre) => {
      rl.question(`¿En qué volumen habla ${nombre}? (número, donde 1 = más bajo y 10 = más alto): `, (volumen) => {
        mujeres.push({ nombre, volumen: parseInt(volumen) });
        pedirDatos(indice + 1);
      });
    });
  } else {
    // Encontrar quién habla más alto y más bajo
    let masAlto = mujeres[0];
    let masBajo = mujeres[0];
    for (let i = 1; i < mujeres.length; i++) {
      if (mujeres[i].volumen > masAlto.volumen) masAlto = mujeres[i];
      if (mujeres[i].volumen < masBajo.volumen) masBajo = mujeres[i];
    }
    console.log('\nDatos ingresados:');
    mujeres.forEach(m => {
      console.log(`${m.nombre} habla con volumen ${m.volumen}`);
    });
    console.log(`\n${masAlto.nombre} habla más alto.`);
    console.log(`${masBajo.nombre} habla más bajo.`);
    rl.close();
  }
}

pedirDatos(0);