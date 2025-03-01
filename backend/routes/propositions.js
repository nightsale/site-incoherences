const express = require('express');
const db = require('../config/database');
const router = express.Router();

// Ajouter une proposition
router.post('/', (req, res) => {
    const { theme, text } = req.body;
    if (!theme || !text) {
        return res.status(400).json({ error: 'Thème et texte requis' });
    }

    const query = 'INSERT INTO propositions (theme, text) VALUES (?, ?)';
    db.query(query, [theme, text], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion:', err);
            return res.status(500).json({ error: 'Erreur serveur' });
        }
        res.status(201).json({ message: 'Proposition ajoutée' });
    });
});

// Récupérer les propositions par thème
router.get('/:theme', (req, res) => {
    const theme = req.params.theme;
    const query = 'SELECT * FROM propositions WHERE theme = ?';

    db.query(query, [theme], (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération:', err);
            return res.status(500).json({ error: 'Erreur serveur' });
        }
        res.json(results);
    });
});

module.exports = router;
