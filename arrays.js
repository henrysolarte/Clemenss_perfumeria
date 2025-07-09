let frutas = ["manzana", "banana", "naranja", "uva", "kiwi"];
console.log(frutas[0, 2]); // Imprime "manzana, naranja"
 // Imprime "banana"
frutas.push("pera"); // Agrega "pera" al final del array
//frutas.pop(""); // Elimina el último elemento del array
console.log(frutas); // Imprime el array actualizado

let persona ={nombre:"juan", edad: 30, ciudad: "Madrid", puntaje: [44, 55, 66], hermanos:{nombre: "Pedro", edad: 25}};
console.log(persona); // Imprime "juan"
console.log(persona.nombre); // Imprime "juan"
console.log(persona.puntaje[2]); // Imprime 30
console.log(persona.hermanos.nombre); // Imprime "Pedro"
console.log(persona.hermanos); // Imprime 25


let puntajes = [10, 20, 30, 40, 50];
let newPuntajes =new Set(puntajes); // Crea un Set a partir del array
console.log(newPuntajes); // Imprime Set { 10, 20, 30, 40, 50 } 
console.log(newPuntajes);     // Verifica si el Set contiene el valor 20, imprime true

//push agregar
//pop eliminar

let frutas2 = ["manzana", "banana", "naranja", "uva", "kiwi"];

//let primero = frutas2.shift(); // Elimina el primer elemento del array
//console.log(primero); // Imprime "manzana"
frutas2.push ("mandarina"); // Agrega "pera" al final del array
console.log(frutas2); // Imprime el array actualizado

let puntajes2 = [10, 20, 30, 40, 50, 12, 50, 60, 70, 80, 90, 100];

puntajes2.sort();
console.log(puntajes2); // Imprime el array ordenado

//ordenar sin sort  
let puntajes3 = [10, 20, 30, 40, 50, 12, 50, 60, 70, 80, 90, 100];
puntajes3.sort((a, b) => a - b); // Ordena el array de menor a mayor
console.log(puntajes3); // Imprime el array ordenado
let posicion = puntajes3.indexOf(50); // Encuentra la posición del valor 50
console.log(posicion); // Imprime 5



let factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial *= i;
}
console.log("El factorial de 10 es: "+ factorial);


