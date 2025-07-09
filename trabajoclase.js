const readline = require("readline");

// CLASES
class Tarea {
  constructor(titulo, fechaVencimiento) {
    this.titulo = titulo;
    this.fechaVencimiento = new Date(fechaVencimiento);
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
    this.prioridad = prioridad;
  }

  obtenerInfo() {
    return super.obtenerInfo() + ", Prioridad: " + this.prioridad;
  }
}

// BASE DE DATOS INICIAL
const tareas = [
  new Tarea("Actualizar documentación", "2025-07-10"),
  new TareaPrioritaria("Resolver incidentes críticos", "2025-07-03", "Alta"),
  new Tarea("Enviar encuesta de satisfacción", "2025-07-12"),
  new TareaPrioritaria("Planificación mensual", "2025-07-07", "Media"),
  new TareaPrioritaria("Capacitación equipo nuevo", "2025-07-01", "Baja")
];

// FUNCIONES
function listarTareas() {
  tareas.forEach(tarea => {
    const completado = tarea.completada ? "✓" : " ";
    const fecha = tarea.fechaVencimiento.toLocaleDateString("es-CO");
    const prioridad = tarea instanceof TareaPrioritaria ? "(" + tarea.prioridad + ") " : "";
    console.log("[" + completado + "] " + prioridad + tarea.titulo + " – vence el " + fecha);
  });
}

function filtrarVencidas() {
  const hoy = new Date();
  return tareas.filter(t => t.fechaVencimiento < hoy && !t.completada);
}

function contarPorPrioridad(prio) {
  return tareas.reduce((total, t) => {
    return t instanceof TareaPrioritaria && t.prioridad === prio ? total + 1 : total;
  }, 0);
}

function listarPorPrioridad(prioridad) {
  console.log("\n📌 Tareas de prioridad " + prioridad + ":");
  tareas.forEach(t => {
    if (t instanceof TareaPrioritaria && t.prioridad.toLowerCase() === prioridad.toLowerCase()) {
      console.log("- " + t.titulo + " (vence " + t.fechaVencimiento.toLocaleDateString("es-CO") + ")");
    }
  });
}

// INTERFAZ DE CONSOLA
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("📋 Lista de tareas inicial:");
listarTareas();

rl.question("\n📝 Ingresa el título de la nueva tarea: ", (titulo) => {
  rl.question("📅 Ingresa la fecha de vencimiento (YYYY-MM-DD): ", (fecha) => {
    let nuevaTarea = new Tarea(titulo, fecha);

    rl.question("¿Es una tarea prioritaria? (yes/no): ", (resp) => {
      if (resp.toLowerCase() === "yes") {
        rl.question("Nivel de prioridad (Alta/Media/Baja): ", (nivel) => {
          nuevaTarea = new TareaPrioritaria(titulo, fecha, nivel);
          tareas.push(nuevaTarea);
          continuar();
        });
      } else {
        tareas.push(nuevaTarea);
        continuar();
      }
    });
  });
});

function continuar() {
  rl.question("\n¿Deseas ver tareas de una prioridad específica? (Alta/Media/Baja): ", (prioridadElegida) => {
    listarPorPrioridad(prioridadElegida);

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
