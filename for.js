const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese un número entero: ', (num) => {
  num = parseInt(num);
  console.log(`Números pares desde 1 hasta ${num}:`);
  for (let i = 2; i <= num; i += 2) {
    console.log(i);
  }
  rl.close();
});


