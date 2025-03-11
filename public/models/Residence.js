const mongoose = require('mongoose');

const residenceSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    adresse: { type: String, required: true },
    prix: { type: Number, required: true },
    capacite: { type: Number, required: true }, // Nombre de personnes
    piscine: { type: Boolean, default: false },
    balcon: { type: Boolean, default: false },
    image: { type: String }, // URL de l'image
}, { timestamps: true });

const Residence = mongoose.model('Residence', residenceSchema);

module.exports = Residence;