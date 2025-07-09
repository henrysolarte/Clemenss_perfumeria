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
class playerluigi extends Player {
    constructor(nombre, colorSombrero, comer) {
        super(nombre, colorSombrero, comer);
    }

    comer() {
        return this._comer
    }
    get comer() {
    return this._nombre;
}
}
let jugador1 = new Player("Mario", "Rojo");
let jugador2 = new Player("Luigi", "Verde");
let jugador3 = new Player("Peach", "Rosa", "Dulce");



  

console.log(jugador1);
console.log(jugador2);
console.log(jugador3);

console.log(jugador1.saludar());
console.log(jugador2.saludar());


//get
console.log (jugador1.nombre);
console.log (jugador1.colorSombrero);
console.log (jugador3.comer);
//set
jugador1.nombre = "Joshi";
console.log (jugador1.nombre);  
jugador1.colorSombrero = "Azul";
console.log (jugador1.colorSombrero);