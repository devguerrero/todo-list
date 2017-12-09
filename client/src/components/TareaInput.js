import React, { Component } from 'react';

class TareaInput extends Component {
	constructor (props) {
	    super(props);
	    this.state = { }
	    this.handleCreateTarea = this.handleCreateTarea.bind(this)
	    this.handleCancelar = this.handleCancelar.bind(this)
	}

	handleCreateTarea (event) {
		event.preventDefault();
		if(document.getElementById("descripcion").value !== "") {

			const checkboxes =  document.getElementsByClassName('etiquetaBox');
			let etiquetas = new Array()
			for (let i=0; checkboxes[i]; i++) {
				if(checkboxes[i].checked) etiquetas.push(checkboxes[i].value);
			}

			let nuevaTarea = {
				descripcion: document.getElementById("descripcion").value,
				etiquetas: etiquetas
			}
			nuevaTarea = JSON.stringify(nuevaTarea)
			console.log(nuevaTarea)
			fetch("/api/tarea", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: nuevaTarea
			})
			.then(res => {
				this.handleCancelar()
				if(res.status === 200)
					this.props.onActualizar()
				else
					console.error(res)
			})
		}
		
	}

	handleCancelar () {
		document.getElementById("descripcion").value = "";
		let checkboxes = document.getElementsByClassName('etiquetaBox');
		for (let i=0; checkboxes[i]; i++) {
			checkboxes[i].checked = false;
		}
	}

	render () {
		return (
			<div className="tareaInput">
			<h2>Registrar Tarea</h2>
				<form >
		          <input onSubmit={this.handleCreateTarea} id="descripcion" type="text" name="descripcion" placeholder="Ingrese la tarea" />
		          <button type="submit" onClick={this.handleCreateTarea}> Añadir Tarea </button>
		          <button type="button" onClick={this.handleCancelar}> Cancelar </button>
		        </form>
	        </div>
        )
	}
}

export default TareaInput;