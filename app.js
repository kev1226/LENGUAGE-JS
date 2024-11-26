const express = require('express');
const app = express();
const port = 8082;

app.get('/', (req, res) => {
  res.send('¡PAGINA WEB EN EC2 kevin!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
