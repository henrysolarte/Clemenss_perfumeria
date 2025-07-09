const readline = require('readline');

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
    return `${this.titulo} – vence el ${this.fechaVencimiento.toLocaleDateString()}`;
  }
}

class TareaPrioritaria extends Tarea {
  constructor(titulo, fechaVencimiento, prioridad) {
    super(titulo, fechaVencimiento);
    this.prioridad = prioridad; // "Alta" | "Media" | "Baja"
  }

  obtenerInfo() {
    return `(Prioridad: ${this.prioridad}) ${this.titulo} – vence el ${this.fechaVencimiento.toLocaleDateString()}`;
  }
}

// Registro inicial
const tareas = [
  new Tarea("Reunión inicial", "2025-06-20"),
  new TareaPrioritaria("Entrega de informe", "2025-06-25", "Alta"),
  new Tarea("Revisión de código", "2025-06-23"),
  new TareaPrioritaria("Presentación final", "2025-06-30", "Media"),
  new TareaPrioritaria("Enviar feedback", "2025-06-22", "Baja"),
];

// Función para mostrar tareas
function listarTareas(arr = tareas) {
  arr.forEach(t => {
    const check = t.completada ? "✓" : " ";
    let info = t.obtenerInfo ? t.obtenerInfo() : t.titulo;
    console.log(`[${check}] ${info}`);
  });
}

// Función para filtrar tareas vencidas y no completadas
function filtrarVencidas() {
  const hoy = new Date();
  return tareas.filter(t => t.fechaVencimiento < hoy && !t.completada);
}

// Función para contar tareas prioritarias por nivel
function contarPorPrioridad(prio) {
  return tareas.reduce((acc, t) => {
    if (t instanceof TareaPrioritaria && t.prioridad === prio) acc++;
    return acc;
  }, 0);
}

// --- Lógica de negocio con readline ---
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function agregarTarea() {
  rl.question('Ingrese el título de la nueva tarea: ', (titulo) => {
    rl.question('Ingrese la fecha de vencimiento (YYYY-MM-DD): ', (fecha) => {
      let nuevaTarea = new Tarea(titulo, fecha);
      rl.question('¿Es prioritaria? (yes/no): ', (resp) => {
        if (resp.trim().toLowerCase() === 'yes') {
          rl.question('¿Nivel de prioridad? (Alta/Media/Baja): ', (nivel) => {
            nuevaTarea = new TareaPrioritaria(titulo, fecha, nivel);
            tareas.push(nuevaTarea);
            seleccionarPrioridad();
          });
        } else {
          tareas.push(nuevaTarea);
          seleccionarPrioridad();
        }
      });
    });
  });
}

function seleccionarPrioridad() {
  rl.question('¿Qué prioridad desea listar? (Alta/Media/Baja): ', (nivel) => {
    const nivelFormateado = nivel.charAt(0).toUpperCase() + nivel.slice(1).toLowerCase();
    const filtradas = tareas.filter(
      t => t instanceof TareaPrioritaria && t.prioridad === nivelFormateado
    );
    console.log(`\nTareas de prioridad ${nivelFormateado}:`);
    listarTareas(filtradas);

    rl.question('\n¿Marcar todas las tareas vencidas como completadas? (yes/no): ', (confirma) => {
      if (confirma.trim().toLowerCase() === 'yes') {
        filtrarVencidas().forEach(t => t.marcarCompletada());
      }
      mostrarResumen();
    });
  });
}

function mostrarResumen() {
  console.log('\n--- Lista de tareas ---');
  listarTareas();

  const vencidas = filtrarVencidas();
  console.log('\nTareas vencidas sin completar:');
  if (vencidas.length === 0) {
    console.log('Ninguna');
  } else {
    listarTareas(vencidas);
  }

  console.log('\nCantidad de tareas de prioridad Alta: ' + contarPorPrioridad("Alta"));

  console.log('\n--- Lista de tareas tras cambios ---');
  listarTareas();

  rl.close();
}

// Ejecución principal
console.log('--- Lista inicial de tareas ---