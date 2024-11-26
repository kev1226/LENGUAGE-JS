const express = require('express');
const app = express();
const port = 8080;

// Ruta principal que responde con un mensaje
app.get('/', (req, res) => {
  res.send('¡PAGINA WEB EN EC2 kevin!');
});

// Iniciar el servidor en el puerto 80 (puerto estándar para HTTP)
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});