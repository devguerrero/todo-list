import React, { Component } from 'react';
import EtiquetaInput from './EtiquetaInput'
import Etiqueta from './Etiqueta'

class EtiquetasList extends Component {
	constructor (props) {
	    super(props);
	    this.state = { etiquetas: [] }
	    this.handleActualizar = this.handleActualizar.bind(this)
	}

	componentDidMount() {
	    fetch('/api/etiqueta')
	    .then(res => res.json())
	    .then(data => {
	    	this.setState({ etiquetas: data.etiquetas })
	    })
	}

	handleActualizar() {
	    fetch('/api/etiqueta', { method: 'GET'})
	    .then(res => res.json())
	    .then(data => {
	    	this.setState({ etiquetas: data.etiquetas })
	    })
	}

	render () {
		return (
			<div className="etiquetas">
	          <h3>Seleccionar Etiquetas para la Tarea</h3>
	          { 
	            this.state.etiquetas.map(etiqueta => <Etiqueta key={etiqueta._id} { ...etiqueta } onActualizar={this.handleActualizar} />) 
	          }
	          <EtiquetaInput onActualizar={this.handleActualizar}/>
	        </div>
        )
	}
}

export default EtiquetasList;