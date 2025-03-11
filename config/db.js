const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/location_app', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ Connexion à MongoDB réussie');
    } catch (error) {
        console.error('❌ Erreur de connexion à MongoDB :', error);
        process.exit(1);
    }
};

module.exports = connectDB;