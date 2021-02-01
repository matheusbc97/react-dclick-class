import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state = 10;
  }

  render() {
    return (
      <div className="counter-container">
        <p className="title">Contador</p>
        <p className="counter">{this.state}</p>
        <div className="buttons-container">
          <button>Remover</button>
          <button>Adicionar</button>
        </div>
      </div>
    )
  }
}
