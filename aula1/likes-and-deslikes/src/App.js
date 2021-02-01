import './App.css';

import React, { Component } from 'react'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa'


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0
    };
  }

  //Nunca incremente ou altere um valor no state do componente, toda a alteração deverá ser feita pelo setState 
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
          <button onClick={()=>this.subtract()}>
            <FaThumbsDown size={40}/>
          </button>
          <button onClick={()=>this.add()}>
            <FaThumbsUp size={40} />
          </button>
        </div>
      </div>
    )
  }
}
