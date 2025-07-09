// Solución lógica al problema de los amigos y los medios de transporte
console.log('Solución lógica al problema de los amigos y los medios de transporte:');
const amigos = [
  { nombre: 'Axel', pareja: 'Lucía', transporte: '' },
  { nombre: 'Lucía', pareja: 'Axel', transporte: '' },
  { nombre: 'Andrea', pareja: 'Darío', transporte: 'avión' },
  { nombre: 'Darío', pareja: 'Andrea', transporte: 'avión' },
  { nombre: 'Marlene', pareja: 'Tomás', transporte: 'coche' },
  { nombre: 'Tomás', pareja: 'Marlene', transporte: 'coche' }
];

// El transporte que queda para Axel y Lucía es caminando
amigos.find(a => a.nombre === 'Axel').transporte = 'caminando';
amigos.find(a => a.nombre === 'Lucía').transporte = 'caminando';

// Mostrar el transporte de Tomás
const tomas = amigos.find(a => a.nombre === 'Tomás');
const Axel = amigos.find(a => a.nombre === 'Axel');
console.log(`Tomás viajó en ${tomas.transporte}.`);
//
 console.log(`Axel viajó  ${Axel.transporte}.`);