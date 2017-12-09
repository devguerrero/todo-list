const express = require('express');
const app = express();
const mongoose = require('mongoose');
const api = require('./routes');
const bodyParser = require('body-parser')
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/build')))
app.use('/api', api);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/../client/build/index.html'));
})

const PORT = process.env.PORT || 8080;
// 'mongodb://localhost:27017'
const DB = process.env.MONGODB || 'mongodb://heroku_dmw4jfzm:m499s55ol03d8emk9qm141lmmc@ds133796.mlab.com:33796/heroku_dmw4jfzm';

mongoose.connect(DB + '/todolist', (err, res) => {
	if (err) return console.log(`Error al conectar con MongoDB: ${err}`);	
	console.log('Conexion con MongoDB establecida');
	app.listen(PORT, () => {
		console.log(`TodoList escuchando en el puerto ${PORT}`);
	});
});
