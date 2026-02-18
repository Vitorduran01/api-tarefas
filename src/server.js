const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.send('Mudou automaticamente 😎');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
