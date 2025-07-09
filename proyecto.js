const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'trabajo_enjoy',
  password: '2973293428', //
  port: 5432,
});

async function actualizarNombreUsuario(id) {
  try {
    await client.connect();

    const sql = `UPDATE Usuario SET nombre = $1 WHERE id_usuario = $2`;
    const valores = ['Henry Solarte', id];

    const resultado = await client.query(sql, valores);
    console.log(`✅ Usuario con ID ${id} actualizado con nombre: Henry Solarte`);
  } catch (err) {
    console.error('❌ Error:', err.message);
  } finally {
    await client.end();
  }
}

actualizarNombreUsuario(1); // reemplaza 1 con el ID real

