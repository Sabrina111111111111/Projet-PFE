const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API fonctionnelle !');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(Serveur démarré sur le port );
});
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API fonctionnelle !');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
