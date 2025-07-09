const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el nombre: ', (nombre) => {
  rl.question('¿Es amigo? (si/no): ', (amigo) => {
    rl.question('¿Es anfitrión? (si/no): ', (anfitrion) => {
      rl.question('¿Cuál es la edad?: ', (edad) => {
        let esAmigo = amigo === 'si';
        let esAnfitrion = anfitrion === 'si';
        edad = (edad);

        if (esAmigo && esAnfitrion && edad >= 18) {
          console.log(`${nombre} puede entrar a la fiesta`);
        } else {
          console.log(`${nombre} no puede entrar a la fiesta`);
        }
        rl.close();
      });
    });
  });
});