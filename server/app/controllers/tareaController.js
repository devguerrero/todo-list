const Tarea = require('../models/tarea');

function getTarea (req, res) {
	const tareaId = req.params.tareaId;
	Tarea.findById(tareaId)
		 .populate('etiquetas')
		 .exec((err, tarea) => {
			if (err) return res.status(500).send({ Mensaje: `Error al realizar la petición: ${err}` });
			if (!tarea) return res.status(404).send({ Mensaje: `Tarea no encontrada` });
			res.status(200).send({ tarea });
		})
}

function getTareas (req, res) {
	Tarea.find({ })
	     .populate('etiquetas')
	     .exec((err, tareas) => {
			if (err) return res.status(500).send({ Mensaje: `Error al realizar la petición: ${err}` });
			if (!tareas) return res.status(404).send({ Mensaje: `No existen Tareas` });
			res.status(200).send({ tareas });
		})
}

function createTarea (req, res) {
	let tarea = new Tarea();
	console.log(req)
	tarea.descripcion = req.body.descripcion
	tarea.etiquetas = req.body.etiquetas
	tarea.save((err, tareaGuardada) => {
		if (err) return res.status(500).send({ Mensaje: `Error guardando en la Base de Datos: ${err}` });
		console.log(tareaGuardada)
		res.status(200).send({ tarea: tareaGuardada });

	})
}

function updateTarea (req, res) {
	let tareaId = req.params.tareaId;
	console.log(req.body)
	let actualizacion = req.body
	Tarea.findByIdAndUpdate(tareaId, actualizacion, (err, tareaActualizada) => {
		if (err) return res.status(500).send({ Mensaje: `Error actualizando la Tarea: ${err}` })
		res.status(200).send({ tarea: tareaActualizada });
	})
}

function deleteTarea (req, res) {
	let tareaId = req.params.tareaId;
	Tarea.findById(tareaId, (err, tarea) => {
		if (err) return res.status(500).send({ Mensaje: `Error al realizar la petición: ${err}`});
		if (!tarea) return res.status(404).send({ Mensaje: `Tarea no encontrada` });
		tarea.remove((err) => {
			if (err) return res.status(500).send({ Mensaje: `Error al eliminar la Tarea: ${err}` });
			res.status(200).send({ Mensaje: `Tarea eliminada satisfactoriamente` });
		})
	})
}

module.exports = {
	getTarea,
	getTareas,
	createTarea,
	updateTarea,
	deleteTarea
}