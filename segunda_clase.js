const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cuál es tu nombre? ', (nombre) => {
  rl.question('¿Cuántos años tienes? ', (edad) => {
    if (parseInt(edad) >= 18) {
      console.log('Hola, ' + nombre + '. Aquí tienes los números del 1 al 199:');
      for (let i = 1; i <= 199; i++) {
        console.log(i);
      }
      console.log(nombre + ', acabo de listar los números porque eres mayor de edad, ¡felicitaciones!');
      console.log(nombre + ' Hasta la vista Baby');
    } else {
      console.log(nombre + ', eres muy pequeño para estar solo. No se van a listar los números.');
      console.log('');
    }
    rl.close();
  });
});