const connectDB = require('./config/db');
connectDB(); // Connexion à la base de données
const residenceRoutes = require('./routes/residenceRoutes');
app.use(express.json()); // Pour traiter les données JSON
app.use('/api/residences', residenceRoutes);