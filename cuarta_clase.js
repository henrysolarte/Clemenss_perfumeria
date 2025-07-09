// Ejemplo de PILA (Stack)
// Ejemplo de PILA (Stack)
/*let pila = [];
pila.push('A'); // Agrega A
pila.push('B'); // Agrega B
pila.push('C'); // Agrega C
console.log('Pila después de push:', pila);

// Sacar el elemento en la posición 0 (el primero que se agregó)
let elementoCero = pila.splice(0, 1)[0];
console.log('Elemento en la posición 0 sacado de la pila:', elementoCero);
console.log('Pila después de sacar el elemento 0:', pila);*/




let pila = [];
pila.push('A'); // Agrega A
pila.push('B'); // Agrega B
pila.push('C'); // Agrega C
console.log('Pila después de push:', pila);

let elementoCero = pila.splice(0, 1) [0]; // Saca el último (C)
console.log('Elemento sacado de la pila:', elementoCero);
console.log('Pila después de pop:', pila);

let elementoUno = pila.splice(0, 1) [1]; // Saca el último (C)
console.log('Elemento sacado de la pila:', elementoUno);
console.log('Pila después de pop:', pila);

 /*Ejemplo de COLA (Queue)
let cola = [];
cola.push('1'); // Agrega 1
cola.push('2'); // Agrega 2
cola.push('3'); // Agrega 3
console.log('Cola después de push:', cola);

let elementoCola = cola.shift(); // Saca el primero (1)
console.log('Elemento sacado de la cola:', elementoCola);
console.log('Cola después de shift:', cola);

// Ejemplo de PILA (Stack)
let pila = [];
pila.push('A'); // Agrega A
pila.push('B'); // Agrega B
pila.push('C'); // Agrega C
console.log('Pila después de push:', pila);

// Sacar el elemento en la posición 0 (el primero que se agregó)
let elementoCero = pila.splice(0, 1)[0];
console.log('Elemento en la posición 0 sacado de la pila:', elementoCero);
console.log('Pila después de sacar el elemento 0:', pila);

// Sacar el último elemento normalmente (comportamiento de pila)
let elementoPila = pila.pop();
console.log('Elemento sacado de la pila:', elementoPila);
console.log('Pila después de pop:', pila);*/