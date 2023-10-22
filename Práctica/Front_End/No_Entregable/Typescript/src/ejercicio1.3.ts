// Inspeccione el error, luego corríjalo.

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Porfavor ingresa, ingresa tu nombre: ', name => {
  let es_pablo: boolean = true;
  if (name.toLowerCase() === 'pablo') {
    es_pablo = true;
  }
  else {
    es_pablo = false;
  }
  rl.close();
  console.log('[Ejercicio 1.3]', `${es_pablo ? 'Oh, hola Pablo' : 'Y vos quien sos?'}`);
});
