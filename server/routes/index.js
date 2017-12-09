const express = require('express');
const api = express.Router();

const TareaCtrl = require('../app/controllers/tareaController');
const EtiquetaCtrl = require('../app/controllers/etiquetaController');

api.get('/', (req, res) => {
	res.status(200).send({ welcome: 'Bienvenido a la API TodoList' });
})

api.get('/tarea', TareaCtrl.getTareas);
api.get('/tarea/:tareaId', TareaCtrl.getTarea);
api.post('/tarea', TareaCtrl.createTarea);
api.patch('/tarea/:tareaId', TareaCtrl.updateTarea);
api.delete('/tarea/:tareaId', TareaCtrl.deleteTarea);

api.get('/etiqueta', EtiquetaCtrl.getEtiquetas);
api.get('/etiqueta/:etiquetaId', EtiquetaCtrl.getEtiqueta);
api.post('/etiqueta', EtiquetaCtrl.createEtiqueta);
api.patch('/etiqueta/:etiquetaId', EtiquetaCtrl.updateEtiqueta);
api.delete('/etiqueta/:etiquetaId', EtiquetaCtrl.deleteEtiqueta);

module.exports = api