import React, { Component } from 'react';
import moment from 'moment';
class Tarea extends Component {
	constructor (props) {
	    super(props);
	    this.state = { etiquetas: [] }
	    this.handleEliminar = this.handleEliminar.bind(this)
	}

	handleEliminar () {
		fetch('/api/tarea/' + this.props._id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if(res.status === 200)
				this.props.onActualizar()
			else
				console.log(res)
		})
	}

	render () {
		return (
			<div id={this.props._id} className="Tarea">
	            <p>
	          		<input type="radio" name="listo" onClick={this.handleEliminar} />
		      		{ this.props.descripcion } | 
		      		<small> Etiquetas: { this.props.etiquetas.map(etiqueta => <small> {etiqueta.nombre} </small>) } </small>
	            </p>
	        </div>
        )
	}
}

export default Tarea;