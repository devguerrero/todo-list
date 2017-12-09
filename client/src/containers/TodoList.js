import React, { Component } from 'react';

import Header from '../components/Header';
import TareaInput from '../components/TareaInput';
import TareasList from '../components/TareasList';
import EtiquetasList from '../components/EtiquetasList';


class TodoList extends Component {
  constructor (props) {
    super(props);
    this.state = { tareas: [] }
    this.handleActualizar = this.handleActualizar.bind(this)
  }

  componentDidMount() {
    fetch('/api/tarea')
      .then(res => res.json())
      .then(data => {
        this.setState({ tareas: data.tareas })
      })
      .catch(err => console.error(err))
  }


  handleActualizar () {
    fetch('/api/tarea')
      .then(res => res.json())
      .then(data => {
        this.setState({ tareas: data.tareas })
      })
  }

  render () {
    return (
      <div className="TodoList">
        <Header /> 
        <TareasList tareas={this.state.tareas} onActualizar={this.handleActualizar} />
        <TareaInput onActualizar={this.handleActualizar} />
        <EtiquetasList />
      </div>
    );
  }
}

export default TodoList;