const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 17 },
  { nombre: "María", edad: 30 },
  { nombre: "Carlos", edad: 15 }
];

// 1. Recorrer e imprimir "<nombre>: <edad> años"
personas.forEach(persona => {
  console.log(`${persona.nombre}: ${persona.edad} años`);
});

// 2. Filtrar quienes tengan edad ≥ 18 y mostrar sus nombres
const mayores = personas.filter(persona => persona.edad >= 18);
console.log("Mayores de edad:", mayores.map(p => p.nombre).join(', '));

// 3. Buscar el objeto cuyo nombre coincida con un valor dado
const nombreBuscado = "María"; // Puedes cambiar este valor
const encontrado = personas.find(persona => persona.nombre === nombreBuscado);
if (encontrado) {
  console.log(`Encontrado: ${encontrado.nombre}, ${encontrado.edad} años`);
} else {
  console.log(`No se encontró a ${nombreBuscado}`);
}