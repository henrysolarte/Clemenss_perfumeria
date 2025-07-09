const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese su nombre: ', (nombre) => {
  rl.question('Ingrese un número: ', (num) => {
    num = parseInt(num);
    console.log(`\n${nombre}, estos son los números pares hasta ${num}:`);
    for (let i = 2; i <= num; i += 2) {
        contador++
        console.log(i);
        console.log(contador);
    }
    /*console.log(`\n${nombre}, estos son los números impares hasta ${num}:`);
    for (let i = 1; i <= num; i += 2) {
      console.log(i);
    }*/
    rl.close();
  });
});