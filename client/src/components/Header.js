import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Header extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
        <header className="Header">
          <img src={logo} className="Logo" alt="logo" />
          <h1 className="Title">TodoList Con React</h1>
        </header>
    );
  }
}

export default Header;