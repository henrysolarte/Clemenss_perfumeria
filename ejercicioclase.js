const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el nombre del hombre: ', (nombre) => {
  rl.question('Ingrese la edad del hombre: ', (edad) => {
    edad = parseInt(edad);

    if (edad < 18) {
      console.log(`${nombre} tiene ${edad} años y es joven`);
    } else if (edad >= 18 && edad <= 40) {
      console.log(`${nombre} tiene ${edad} años y es adulto`);
    } else  (edad > 40) {
      console.log(`${nombre} tiene ${edad} años y es adulto mayor`);
    } 
    rl.close();
  });
});