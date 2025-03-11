const express = require('express'); // Importation d'Express
const app = express();

const PORT = 3000; // Définition du port d'écoute

// Middleware pour servir les fichiers statiques (HTML, CSS, JS côté client)
app.use(express.static('public'));

// Route principale
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Affichage de la valeur du port pour vérifier que tout est bien défini
console.log('PORT : ', PORT);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log('Serveur en cours d\'exécution sur http://localhost:' + PORT); // Utilisation de la concaténation de chaînes
});