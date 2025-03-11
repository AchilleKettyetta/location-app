const express = require('express');
const router = express.Router();
const Residence = require('../models/Residence');

// Ajouter une résidence
router.post('/add', async (req, res) => {
    try {
        const newResidence = new Residence(req.body);
        await newResidence.save();
        res.status(201).json({ message: 'Résidence ajoutée avec succès', residence: newResidence });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Récupérer toutes les résidences
router.get('/', async (req, res) => {
    try {
        const residences = await Residence.find();
        res.status(200).json(residences);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Supprimer une résidence
router.delete('/:id', async (req, res) => {
    try {
        await Residence.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Résidence supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;