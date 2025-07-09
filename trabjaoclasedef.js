const readline = require("readline");

class Tarea {
  constructor(titulo, fechaVencimiento) {
    this.titulo = titulo;
    this.fechaVencimiento = new Date(fechaVencimiento);
    if (isNaN(this.fechaVencimiento.getTime())) {
      throw new Error("Fecha inválida");
    }
    this.completada = false;
  }

  marcarCompletada() {
    this.completada = true;
  }

  obtenerInfo() {
    return "Tarea: " + this.titulo +
           ", Vence: " + this.fechaVencimiento.toDateString() +
           ", Completada: " + this.completada;
  }
}

class TareaPrioritaria extends Tarea {
  constructor(titulo, fechaVencimiento, prioridad) {
    super(titulo, fechaVencimiento);
    const niveles = ["Alta", "Media", "Baja"];
    if (!niveles.includes(prioridad)) {
      throw new Error("Prioridad inválida");
    }
    this.prioridad = prioridad;
  }

  obtenerInfo() {
    return super.obtenerInfo() + ", Prioridad: " + this.prioridad;
  }
}

const tareas = [];

function listarTareas() {
  tareas.forEach(tarea => {
    const completado = tarea.completada ? "✓" : " ";
    const fecha = tarea.fechaVencimiento.toLocaleDateString("es-CO") || tarea.fechaVencimiento.toDateString();
    const prioridad = tarea instanceof TareaPrioritaria ? "(" + tarea.prioridad + ") " : "";
    console.log("[" + completado + "] " + prioridad + tarea.titulo + " – vence el " + fecha);
  });
}

function filtrarVencidas() {
  const hoy = new Date();
  return tareas.filter(t => t.fechaVencimiento < hoy && !t.completada);
}

function listarPorPrioridad(prioridad) {
  const normalizada = prioridad.toLowerCase();
  console.log("\n📌 Tareas de prioridad " + prioridad + ":");
  tareas.forEach(t => {
    if (t instanceof TareaPrioritaria && t.prioridad.toLowerCase() === normalizada) {
      console.log("- " + t.titulo + " (vence " + t.fechaVencimiento.toDateString() + ")");
    }
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function crearTarea() {
  rl.question("\n📝 Ingresa el título de la nueva tarea: ", (titulo) => {
    rl.question("📅 Ingresa la fecha de vencimiento (YYYY-MM-DD): ", (fecha) => {
      try {
        let nuevaTarea = new Tarea(titulo, fecha);

        rl.question("¿Es una tarea prioritaria? (yes/no): ", (resp) => {
          if (resp.toLowerCase() === "yes") {
            rl.question("Nivel de prioridad (Alta/Media/Baja): ", (nivel) => {
              try {
                nuevaTarea = new TareaPrioritaria(titulo, fecha, capitalizar(nivel));
                tareas.push(nuevaTarea);
                preguntarOtraTarea();
              } catch (e) {
                console.error("❌ " + e.message);
                crearTarea(); // volver a pedir
              }
            });
          } else {
            tareas.push(nuevaTarea);
            preguntarOtraTarea();
          }
        });
      } catch (e) {
        console.error("❌ " + e.message);
        crearTarea(); // volver a pedir
      }
    });
  });
}

function preguntarOtraTarea() {
  rl.question("¿Deseas ingresar otra tarea? (yes/no): ", (respuesta) => {
    if (respuesta.toLowerCase() === "yes") {
      crearTarea();
    } else {
      continuar();
    }
  });
}

function continuar() {
  rl.question("\n¿Deseas ver tareas de una prioridad específica? (Alta/Media/Baja): ", (prioridadElegida) => {
    listarPorPrioridad(capitalizar(prioridadElegida));

    rl.question("\n¿Deseas marcar todas las tareas vencidas como completadas? (yes/no): ", (confirmacion) => {
      if (confirmacion.toLowerCase() === "yes") {
        const vencidas = filtrarVencidas();
        vencidas.forEach(t => t.marcarCompletada());
        console.log("\n✔️ Tareas vencidas marcadas como completadas.");
      }

      console.log("\n📌 Tareas finales:");
      listarTareas();

      rl.close();
    });
  });
}

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// INICIAR PROCESO
console.log("📋 Registro de tareas");
crearTarea();
