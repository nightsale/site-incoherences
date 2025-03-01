const express = require('express');
const cors = require('cors');
const propositionsRoutes = require('./routes/propositions');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Routes API
app.use('/api/propositions', propositionsRoutes);
const path = require('path');

// Servir les fichiers statiques du frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rediriger vers index.html par défaut
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(port, () => {
    console.log(`Serveur backend démarré sur http://localhost:${port}`);
});
