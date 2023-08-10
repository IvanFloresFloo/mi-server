const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el número de puerto si es necesario

// Configura una ruta de inicio
app.get('/', (req, res) => {
  res.send('¡Hola, este es mi servidor Express!');
});

// Configura una ruta personalizada
app.get('/saludo', (req, res) => {
  res.send('¡Hola desde la ruta /saludo!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
