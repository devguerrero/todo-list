const Etiqueta = require('../models/etiqueta');

function getEtiqueta (req, res) {
	const etiquetaId = req.params.etiquetaId;
	Etiqueta.findById(etiquetaId, (err, etiqueta) => {
		if (err) return res.status(500).send({ Mensaje: `Error al realizar la petición: ${err}`});
		if (!etiqueta) return res.status(404).send({ Mensaje: `Etiqueta no encontrada` });
		res.status(200).send({ etiqueta });
	})

}

function getEtiquetas (req, res) {
	Etiqueta.find({ }, (err, etiquetas) => {
		if (err) return res.status(500).send({ Mensaje: `Error al realizar la petición: ${err}` });
		if (!etiquetas) return res.status(404).send({ Mensaje: `No existen Etiquetas` });
		res.status(200).send({ etiquetas });
	})
}

function createEtiqueta (req, res) {
	let etiqueta = new Etiqueta();
	etiqueta.nombre = req.body.nombre
	etiqueta.save((err, etiquetaGuardada) => {
		if (err) return res.status(500).send({ Mensaje: `Error guardando en la Base de Datos: ${err}` });
		console.log(etiquetaGuardada)
		res.status(200).send({ etiqueta: etiquetaGuardada });

	})
}

function updateEtiqueta (req, res) {
	let etiquetaId = req.params.etiquetaId;
	let actualizacion = req.body
	Etiqueta.findByIdAndUpdate(etiquetaId, actualizacion, (err, etiquetaActualizada) => {
		if (err) return res.status(500).send({ Mensaje: `Error actualizando la Etiqueta: ${err}` })
		res.status(200).send({ etiqueta: etiquetaActualizada });
	})
}

function deleteEtiqueta (req, res) {
	let etiquetaId = req.params.etiquetaId;
	Etiqueta.findById(etiquetaId, (err, etiqueta) => {
		if (err) return res.status(500).send({ Mensaje: `Error al realizar la petición: ${err}`});
		if (!etiqueta) return res.status(404).send({ Mensaje: `Etiqueta no encontrada` });
		etiqueta.remove((err) => {
			if (err) return res.status(500).send({ Mensaje: `Error al eliminar la Etiqueta: ${err}` });
			res.status(200).send({ Mensaje: `Etiqueta eliminada satisfactoriamente` });
		})
	})
}

module.exports = {
	getEtiqueta,
	getEtiquetas,
	createEtiqueta,
	updateEtiqueta,
	deleteEtiqueta
}