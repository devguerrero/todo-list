import React, { Component } from 'react';

class EtiquetaInput extends Component {
	constructor (props) {
	    super(props);
	    this.state = { }
	    this.handleCreateEtiqueta = this.handleCreateEtiqueta.bind(this)
	    this.handleCancelar = this.handleCancelar.bind(this)
	}

	handleCreateEtiqueta (event) {
		event.preventDefault();
		if(document.getElementById("nombre").value !== "") {

			let nuevaEtiqueta = {
				nombre: document.getElementById("nombre").value,
			}
			nuevaEtiqueta = JSON.stringify(nuevaEtiqueta)
			console.log(nuevaEtiqueta)
			fetch("/api/etiqueta", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: nuevaEtiqueta
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
		document.getElementById("nombre").value = "";
	}

	render () {
		return (
			<div className="tareaInput">
			<h2>Registrar Etiqueta</h2>
				<form onSubmit={this.handleCreateEtiqueta}>
		          <input id="nombre" type="text" name="nombre" placeholder="Nombre Etiqueta" />
		          <button type="submit"> Añadir Etiqueta </button>
		          <button type="button" onClick={this.handleCancelar}> Cancelar </button>
		        </form>
	        </div>
        )
	}
}

export default EtiquetaInput;