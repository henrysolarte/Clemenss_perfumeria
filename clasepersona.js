class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log("Hola, mi nombre es "+ this.nombre +  "y tengo " + this.edad + " años.");
  }

  cumpliranios() {
    this.edad += 1;
    console.log("Feliz cumpleaños" + this.nombre + ", ahora tienes " + this.edad + " años.");
  }
}

// Ejemplo de uso:
const persona1 = new Persona("Ana", 25);
persona1.saludar();
persona1.cumpliranios();  