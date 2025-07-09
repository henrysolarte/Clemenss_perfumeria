const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const diasSemana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];

function preguntarPersona(callback) {
  rl.question('¿Cuál es el nombre? ', (nombre) => {
    rl.question('¿Cuál es la edad? ', (edad) => {
      rl.question('¿Cuál es el sexo? ', (sexo) => {
        rl.question(`¿Qué días miente ${nombre}? (escribe los días separados por coma, ejemplo: lunes,miércoles,viernes): `, (respuesta) => {
          const dias = respuesta.split(',').map(d => d.trim().toLowerCase());
          callback({ nombre, edad, sexo, diasMiente: dias });
        });
      });
    });
  });
}

preguntarPersona((persona1) => {
  preguntarPersona((persona2) => {
    const noMiente1 = diasSemana.filter(dia => !persona1.diasMiente.includes(dia));
    const noMiente2 = diasSemana.filter(dia => !persona2.diasMiente.includes(dia));
    const noMientenAmbos = diasSemana.filter(
      dia => !persona1.diasMiente.includes(dia) && !persona2.diasMiente.includes(dia)
    );

    console.log(`\n${persona1.nombre} ${persona1.edad} años, ${persona1.sexo} NO miente los días: ${noMiente1.join(', ')}`);
    console.log(`${persona2.nombre} ${persona2.edad} años, ${persona2.sexo} NO miente los días: ${noMiente2.join(', ')}`);
    console.log('Días que ninguno miente:', noMientenAmbos.join(', '));
    rl.close();
  });
});


