class Player {
    constructor(nombre, colorSombrero) {
        this._nombre = nombre;
        this._colorSombrero = colorSombrero;
    }

    saltar() {}
    correr() {}
    saludar() {
        return `¡Hola! Soy ${this._nombre} y mi sombrero es de color ${this._colorSombrero}.`;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    get colorSombrero() {
        return this._colorSombrero;
    }
    set colorSombrero(nuevoColor) {
        this._colorSombrero = nuevoColor;
    }
}

class PlayerLuigi extends Player {
    constructor(nombre, colorSombrero, comidaFavorita) {
        super(nombre, colorSombrero);
        this._comidaFavorita = comidaFavorita;
    }

    comer() {
        return `${this._nombre} está comiendo ${this._comidaFavorita}.`;
    }

    get comidaFavorita() {
        return this._comidaFavorita;
    }
    set comidaFavorita(nuevaComida) {
        this._comidaFavorita = nuevaComida;
    }
}

let jugador1 = new Player("Mario", "Rojo");
let jugador2 = new PlayerLuigi("Luigi", "Verde", "Pasta");
let jugador3 = new PlayerLuigi("Peach", "Rosa", "Dulce");

console.log(jugador1);
console.log(jugador2);
console.log(jugador3);

console.log(jugador1.saludar());
console.log(jugador2.saludar());
console.log(jugador3.saludar());

// get
console.log(jugador1.nombre);
console.log(jugador1.colorSombrero);
console.log(jugador3.comidaFavorita); // Ahora sí imprime "Dulce"
//console.log(jugador3.comer());        // Imprime "Peach está comiendo Dulce."

// set
jugador1.nombre = "Joshi";
console.log(jugador1.nombre);
jugador1.colorSombrero = "Azul";
console.log(jugador1.nombre + "esta cambiado el nombre a Joshi y el color del sombrero a Azul.");
console.log(jugador2.comer()); // Imprime "Luigi está comiendo Pasta."
console.log(jugador1.colorSombrero); // Imprime "Mario está comiendo pizza."