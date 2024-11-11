const express = require('express');
const app = express();
const port = 8082;

app.get('/', (req, res) => {
  res.send('¡STRENGTHENING JAVASCRIPT PULL!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
