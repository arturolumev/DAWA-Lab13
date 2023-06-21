const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  duracion: { type: String, required: true },
  genero: { type: String, required: true },
  director: { type: String, required: true },
  anoLanzamiento: { type: Number, required: true },
  calificacion: { type: String, required: true },
  poster: { type: String } // Puedes almacenar la URL de la imagen del póster
});

module.exports = mongoose.model('Item', itemSchema);
