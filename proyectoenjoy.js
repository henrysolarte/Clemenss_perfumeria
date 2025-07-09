// gestor_proyectos.js
const { Client } = require('pg');
const readline = require('readline-sync');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'trabajo_enjoy',
  password: '2973293428',
  port: 5432,
});

function pedirEstado() {
  const estadosValidos = ['Activo', 'Pendiente', 'Suspendido'];
  let estado;
  do {
    estado = readline.question('Estado (Activo, Pendiente, Suspendido): ');
    if (!estadosValidos.includes(estado)) {
      console.log('❌ Estado inválido. Debe ser: Activo, Pendiente o Suspendido.');
    }
  } while (!estadosValidos.includes(estado));
  return estado;
}

function pedirRol() {
  const rolesValidos = ['Administrador', 'Líder', 'Usuario'];
  let rol;
  do {
    rol = readline.question('Rol (Administrador, Líder, Usuario): ');
    if (!rolesValidos.includes(rol)) {
      console.log('❌ Rol inválido. Debe ser: Administrador, Líder o Usuario.');
    }
  } while (!rolesValidos.includes(rol));
  return rol;
}

async function login() {
  try {
    await client.connect();
    console.log('✅ Conectado a la base de datos trabajo_enjoy');

    const correo = readline.questionEMail('Correo: ');
    const contrasena = readline.question('Contrasena: ', { hideEchoBack: true });

    const query = `
      SELECT * FROM usuario
      WHERE correo = $1 AND contrasena = $2
    `;
    const valores = [correo, contrasena];
    const resultado = await client.query(query, valores);

    if (resultado.rows.length > 0) {
      const usuario = resultado.rows[0];
      console.log(`\nBienvenido, ${usuario.nombre}!\n`);
      await mostrarMenu(usuario);
    } else {
      console.log('❌ Usuario o contrasena incorrectos.');
      await client.end();
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
    await client.end();
  }
}

async function agregarUsuarioDesdeConsola() {
  try {
    const nombre = readline.question('Nombre: ');
    const correo = readline.questionEMail('Correo: ');
    const contrasena = readline.question('Contrasena: ', { hideEchoBack: true });
    const estado = pedirEstado();
    const rol = pedirRol();

    const insertarUsuario = `
      INSERT INTO usuario (nombre, correo, contrasena, estado, rol)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id_usuario
    `;
    const valores = [nombre, correo, contrasena, estado, rol];
    const resultado = await client.query(insertarUsuario, valores);
    const id = resultado.rows[0].id_usuario;

    console.log(`✅ Usuario agregado con ID: ${id}`);
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

async function crearTarea() {
  try {
    const titulo = readline.question('Título de la tarea: ');
    const descripcion = readline.question('Descripción: ');
    const estado = 'Pendiente';
    const fechaInicio = readline.question('Fecha de inicio (YYYY-MM-DD): ');
    const fechaFin = readline.question('Fecha de fin (YYYY-MM-DD): ');

    const insertarTarea = `
      INSERT INTO tarea (titulo, descripcion, estado, fecha_inicio, fecha_fin)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id_tarea
    `;
    const valores = [titulo, descripcion, estado, fechaInicio, fechaFin];
    const resultado = await client.query(insertarTarea, valores);
    const idTarea = resultado.rows[0].id_tarea;

    console.log(`✅ Tarea creada con ID: ${idTarea}`);
  } catch (err) {
    console.error('❌ Error al crear tarea:', err.message);
  }
}

async function asignarTareaAUsuario() {
  try {
    const tareas = await client.query('SELECT id_tarea, titulo FROM tarea WHERE id_asignado_a IS NULL');
    if (tareas.rows.length === 0) {
      console.log('📭 No hay tareas sin asignar.');
      return;
    }
    console.log('\nTareas disponibles para asignar:');
    tareas.rows.forEach(t => {
      console.log(`${t.id_tarea}: ${t.titulo}`);
    });
    const idTarea = readline.questionInt('ID de la tarea: ');

    const usuarios = await client.query("SELECT id_usuario, nombre FROM usuario WHERE rol = 'Usuario'");
    console.log('\nUsuarios disponibles:');
    usuarios.rows.forEach(u => {
      console.log(`${u.id_usuario}: ${u.nombre}`);
    });
    const idUsuario = readline.questionInt('ID del usuario a asignar: ');

    await client.query('UPDATE tarea SET id_asignado_a = $1 WHERE id_tarea = $2', [idUsuario, idTarea]);
    console.log('✅ Tarea asignada correctamente.');
  } catch (err) {
    console.error('❌ Error al asignar tarea:', err.message);
  }
}

async function verTareasYComentar(usuario) {
  try {
    const query = `
      SELECT * FROM tarea
      WHERE id_asignado_a = $1 AND estado IN ('Activo', 'Pendiente')
    `;
    const resultado = await client.query(query, [usuario.id_usuario]);

    if (resultado.rows.length === 0) {
      console.log('📭 No tienes tareas activas o pendientes asignadas.');
      return;
    }

    console.log('\n📋 Tareas asignadas disponibles:');
    resultado.rows.forEach(t => {
      console.log(`- ID: ${t.id_tarea} | ${t.titulo} (${t.estado})`);
    });

    const idTarea = readline.questionInt('Ingrese el ID de la tarea para comentar: ');
    const encontrada = resultado.rows.find(t => t.id_tarea === idTarea);

    if (!encontrada) {
      console.log('❌ Tarea no válida.');
      return;
    }

    const comentario = readline.question('Escriba su comentario: ');

    const insertarComentario = `
      INSERT INTO comentario (contenido, id_tarea, id_usuario, fecha_hora)
      VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
    `;
    await client.query(insertarComentario, [comentario, idTarea, usuario.id_usuario]);

    console.log('✅ Comentario agregado a la tarea.');

    const cambiarEstado = readline.question('¿Deseas cambiar el estado de esta tarea a "Completada"? (s/n): ');
    if (cambiarEstado.toLowerCase() === 's') {
      await client.query("UPDATE tarea SET estado = 'Completada' WHERE id_tarea = $1", [idTarea]);
      console.log('✅ Estado actualizado a Completada.');
    }
  } catch (err) {
    console.error('❌ Error al comentar:', err.message);
  }
}

async function verTodasLasTareas() {
  try {
    const resultado = await client.query(`
      SELECT t.id_tarea, t.titulo, t.estado, u.nombre AS asignado_a
      FROM tarea t
      LEFT JOIN usuario u ON t.id_asignado_a = u.id_usuario
      ORDER BY t.id_tarea
    `);

    if (resultado.rows.length === 0) {
      console.log('📭 No hay tareas registradas.');
      return;
    }

    console.log('\n📋 Todas las tareas:');
    resultado.rows.forEach(t => {
      console.log(`- ID: ${t.id_tarea} | ${t.titulo} | Estado: ${t.estado} | Asignado a: ${t.asignado_a || 'Sin asignar'}`);
    });
  } catch (err) {
    console.error('❌ Error al listar tareas:', err.message);
  }
}

async function mostrarMenu(usuario) {
  let salir = false;
  while (!salir) {
    console.log('\n--- MENU ---');
    if (usuario.rol === 'Líder') {
      console.log('1. Agregar usuario');
      console.log('2. Crear tarea');
      console.log('3. Asignar tarea');
      console.log('4. Ver todas las tareas');
      console.log('5. Salir');
      const opcion = readline.question('Seleccione una opcion: ');
      switch (opcion) {
        case '1':
          await agregarUsuarioDesdeConsola();
          break;
        case '2':
          await crearTarea();
          break;
        case '3':
          await asignarTareaAUsuario();
          break;
        case '4':
          await verTodasLasTareas();
          break;
        case '5':
          salir = true;
          break;
        default:
          console.log('❌ Opcion invalida.');
      }
    } else if (usuario.rol === 'Usuario') {
      console.log('1. Ver tareas y comentar');
      console.log('2. Salir');
      const opcion = readline.question('Seleccione una opcion: ');
      switch (opcion) {
        case '1':
          await verTareasYComentar(usuario);
          break;
        case '2':
          salir = true;
          break;
        default:
          console.log('❌ Opcion invalida.');
      }
    } else {
      console.log('1. Salir');
      const opcion = readline.question('Seleccione una opcion: ');
      switch (opcion) {
        case '1':
          salir = true;
          break;
        default:
          console.log('❌ Opcion invalida.');
      }
    }
  }
  await client.end();
  console.log('🔌 Conexión cerrada');
}

login();
