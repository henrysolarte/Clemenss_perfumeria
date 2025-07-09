/*const readline = require('readline');

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

//dos funciones una calcularArea y otra AreaCompuesta calcular area retorne el valor del area y que este valor se utilice en la funcion compuesta

function calcularArea(base, altura) {
    let base = prompt("Ingrese la base del triángulo:");    
    let altura = prompt("Ingrese la altura del triángulo:");
    base = parseFloat(base); // Convierte la entrada a número   
    altura = parseFloat(altura); // Convierte la entrada a número

  let area= base * altura/2;
  console.log("El área del triángulo es: " + area);
      
}*/

class Persona{
    constructor(nombre, altura, edad) {
        this.nombre = nombre;
        this.altura = altura;
        this.edad = edad;
    }
    saludar() {
        console.log("Hola, mi nombre es "+ this.nombre +  " y tengo " + this.edad + años + " años.");
        persona1.saludar();
    }   
}

let persona1 = new Persona("Juan", "1.75", 30);

console.log(`Nombre: ${persona1.nombre}, Altura: ${persona1.altura}, Edad: ${persona1.edad}`);
console.log(persona1.nombre);
 console.log("Hola, mi nombre es "+ this.nombre +  " y tengo " + this.edad + años + " años.");




