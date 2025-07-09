class Curso {
    constructor(titulo, dificultad) {
        this.titulo = titulo;
        this.dificultad = dificultad; // "Básico", "Intermedio", "Avanzado"
        
        this.lecciones = [];
    }

    agregarLeccion(Leccion) {
        this.lecciones.push(Leccion);
    }
    eliminarLeccion(titulo) {
        this.lecciones = this.lecciones.pop();

    }
}

const cursosJava = new Curso("Java Básico", "Básico");
const cursosJavaScript = new Curso("JavaScript Intermedio", "Intermedio");  
const cursosPython = new Curso("Python Avanzado", "Avanzado");

cursosJava.agregarLeccion({ titulo: "Variables y Tipos", duracion: "10min" });
cursosJava.agregarLeccion({ titulo: "Estructuras de Control", duracion: "15min" });

cursosJavaScript.agregarLeccion({ titulo: "Funciones", duracion: "12min" });
cursosJavaScript.agregarLeccion({ titulo: "Objetos", duracion: "18min" });

cursosPython.agregarLeccion({ titulo: "Listas y Tuplas", duracion: "14min" });
cursosPython.agregarLeccion({ titulo: "Programación Orientada a Objetos", duracion: "20min" });


console.log(cursosJava, cursosJavaScript, cursosPython);
// Agregar lecciones a los cursos


