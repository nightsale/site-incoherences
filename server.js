const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const incoherencesFile = path.join(__dirname, 'incoherences.json');

// Lire les incohérences à partir du fichier JSON
function readIncoherences() {
    if (!fs.existsSync(incoherencesFile)) {
        fs.writeFileSync(incoherencesFile, '[]', 'utf-8');
    }
    const data = fs.readFileSync(incoherencesFile, 'utf-8');
    return JSON.parse(data);
}

// Sauvegarder les incohérences dans le fichier JSON
function saveIncoherence(incoherences) {
    fs.writeFileSync(incoherencesFile, JSON.stringify(incoherences, null, 4), 'utf-8');
}

// Route pour récupérer les incohérences
app.get('/incoherences', (req, res) => {
    const incoherences = readIncoherences();
    res.json(incoherences);
});

// Route pour ajouter une nouvelle incohérence
app.post('/incoherences', (req, res) => {
    const incoherences = readIncoherences();
    const newIncoherence = {
        theme: req.body.theme,
        description: req.body.description
    };
    incoherences.push(newIncoherence);
    saveIncoherence(incoherences);
    res.json(newIncoherence);
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
