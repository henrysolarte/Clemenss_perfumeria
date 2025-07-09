class Empleado {
  constructor(nombre, salario) {
    this.nombre = nombre;
    this.salario = salario;
  }

  getDetalles() {
    return "Empleado: " + this.nombre + ", salario: " + this.salario + " millones de pesos ";
  }
}

class Desarrollador extends Empleado {
  constructor(nombre, salario, lenguaje) {
    super(nombre, salario, lenguaje);
    this.lenguaje = lenguaje;
  }

  getDetalles() {
    return "Desarrollador: " + this.nombre + ", lenguaje: " + this.lenguaje + ", salario: " + this.salario + " millones de pesos ";
  }
}

class Gerente extends Empleado {
  constructor(nombre, salario, departamento) {
    super(nombre, salario, departamento);
    this.departamento = departamento;
  }

  getDetalles() {
    return "Gerente: " + this.nombre + ", departamento: " + this.departamento + ", salario: " + this.salario + " millones de pesos ";
  }
}


const desarrollo = new Desarrollador("Ana", 2000, "JavaScript");
const gerente = new Gerente("Luis", 4000000, "Ventas");

console.log(desarrollo.getDetalles());
console.log(gerente.getDetalles());