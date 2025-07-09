const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el nombre: ', (nombre) => {
  rl.question('Ingrese la edad: ', (edad) => {
    edad = parseInt(edad);

    if (edad >= 0 && edad <= 18) {
      console.log(`${nombre} es joven`);
    } else if (edad >= 19 && edad <= 50) {
      console.log(`${nombre} es adulto`);
    } else  {
      console.log(`${nombre} es adulto mayor`);
    } 
    rl.close();
  });
});