const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EtiquetaSchema = Schema({
	nombre: String,
})

module.exports = mongoose.model('Etiqueta', EtiquetaSchema);