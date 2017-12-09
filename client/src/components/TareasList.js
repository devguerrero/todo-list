import React, { Component } from 'react';
import Tarea from './Tarea';

class TareasList extends Component {
	constructor (props) {
	    super(props);
	    
	}

	render () {
		console.log(this.state)
		return (
			<div className="tareas">
	          <h2>Listado de Tareas Pendientes</h2>
	          { 
	            this.props.tareas.map(tarea => <Tarea key={tarea._id} {...tarea} onActualizar={this.props.onActualizar} />)
	          }
	        </div>
        )
	}
}

export default TareasList;