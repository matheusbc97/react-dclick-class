import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      counter: 10
    };
  }

  add(){
    this.setState({
      counter: this.state.counter + 1
    })
  }

  subtract(){
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div className="counter-container">
        <p className="title">Contador</p>
        <p className="counter">{this.state.counter}</p>
        <div className="buttons-container">
          <button onClick={()=>this.subtract()}>Remover</button>
          <button onClick={()=>this.add()}>Adicionar</button>
        </div>
      </div>
    )
  }
}
