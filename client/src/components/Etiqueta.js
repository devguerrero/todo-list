import React, { Component } from 'react';

class Etiqueta extends Component {
	constructor (props) {
	    super(props);
	    this.handleEliminar = this.handleEliminar.bind(this)
	}

	handleEliminar () {
		fetch('/api/etiqueta/' + this.props._id, {
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
		const style = { 
			textDecoration: 'none',
			color: 'black'
		}
		return (
          	<div key={this.props._id}>
          		<input type="checkbox" className="etiquetaBox" name="etiqueta" value={this.props._id} />{this.props.nombre} 
          		<a style={style} href="" onClick={this.handleEliminar}> &times;</a>
          	</div>
        )
	}
}

export default Etiqueta;