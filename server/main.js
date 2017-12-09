const express = require('express');
const app = express();
const mongoose = require('mongoose');
const api = require('./routes');
const bodyParser = require('body-parser')
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')))

app.use('/api', api);
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

const port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost:27017/todo', (err, res) => {
	if (err) return console.log(`Error al conectar con MongoDB: ${err}`);	
	console.log('Conexion con MongoDB establecida');
	app.listen(port, () => {
		console.log(`TodoList escuchando en el puerto ${port}`);
	});
});
