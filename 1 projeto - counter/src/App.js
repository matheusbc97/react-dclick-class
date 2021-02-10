import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0
    };
  }

  //Nunca altere um valor no state do componente, toda a alteração deverá ser feita pelo setState 
  add(){
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    })
  }

  subtract(){
    const { counter } = this.state;
    this.setState({
      counter: counter - 1
    })
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="counter-container">
        <p className="title">Contador</p>
        <p className="counter">{counter}</p>
        <div className="buttons-container">
          <button onClick={()=>this.subtract()}>Remover</button>
          <button onClick={()=>this.add()}>Adicionar</button>
        </div>
      </div>
    )
  }
}
