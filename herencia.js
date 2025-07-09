class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre, raza);
    this.raza = raza;
  }

  hablar() {
    console.log(this.nombre + " de raza " + this.raza + " dice: ¡Guau!");
  }
}

class Gato extends Animal {
  constructor(nombre, color) {
    super(nombre, color);
    this.color = color;
  }

  hablar() {
    console.log(this.nombre + " de color " + this.color + " dice: ¡Miau!");
  }
}

// Ejemplo de uso:
const miPerro = new Perro("Max", "Labrador");
miPerro.hablar();

const miGato = new Gato("Misu", "gris");
miGato.hablar();



// Crear otro objeto de la clase Gato
const otroGato = new Gato("Pelusa", "blanco");
otroGato.hablar();

miGato.hablar = function() {
  console.log(this.nombre + " de color " + this.color + " dice: ¡Miau! (modificado)");
}

miGato.hablar(); // Llamar al método modificado