const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Etiqueta = require('./etiqueta')

const TareaSchema = Schema({
	descripcion: String,
	fechaCreacion: { type: Date, default: Date.now() },
	etiquetas: [{ type: Schema.Types.ObjectId, ref: 'Etiqueta' }]
})

module.exports = mongoose.model('Tarea', TareaSchema);