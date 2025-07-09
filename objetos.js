let nombre = "María"; // Puedes cambiar este valor
let nombre1 = "Ana"; // Puedes cambiar este valor
let apellido = "Gómez"; // Puedes cambiar este valor
//console.log("Hola, " + nombre + "!");


function darSaludo(nombre, apellido) {
  console.log("Hola, " + nombre + "!" + " Tu apellido es " + apellido + ".");
}   

function darDespedida(nombre) {
  console.log("Adiós, " + nombre + "!");
}   

darSaludo(nombre, apellido);

let base = 5; // Puedes cambiar este valor
let altura = 10; // Puedes cambiar este valor


function calcularAreaRectangulo(base, altura) {
  let area = base * altura;
    console.log("El área del rectángulo es: " + area);
}

calcularAreaRectangulo(base, altura);
calcularAreaRectangulo(7, 12); // Puedes llamar a la función con otros valores


function calcularAreaRectangulo1(base1, altura1) {
    let base1 = prompt("Ingrese la base del rectángulo:");
    let altura1 = prompt("Ingrese la altura del rectángulo:");
    let area1 = base1 * altura1;
    console.log("El área del rectángulo es: " + area1);    
}
calcularAreaRectangulo1(base, altura); // Puedes llamar a la función con otros valores

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAreaRectangulo1() {
  rl.question("Ingrese la base del rectángulo: ", (base1) => {
    rl.question("Ingrese la altura del rectángulo: ", (altura1) => {
      let area1 = parseFloat(base1) * parseFloat(altura1);
      console.log("El área del rectángulo es: " + area1);
      rl.close();
    });
  });
}

calcularAreaRectangulo1();