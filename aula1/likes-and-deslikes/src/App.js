import './App.css';

import React, { Component } from 'react'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa'


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
    };
  }

  //Nunca incremente ou altere um valor no state do componente, toda a alteração deverá ser feita pelo setState 
  like(){
    const { likes } = this.state;
    this.setState({
      likes: likes + 1,
    })
  }

  dislike(){
    const { dislikes } = this.state;
    this.setState({
      dislikes: dislikes - 1
    })
  }

  render() {
    const { likes, dislikes } = this.state;
    return (
      <div className="container">
        <p className="title">Avaliações</p>
        <div className="content">
          <div className="ratings-container">
            <p>Negativos</p>
            <p className="counter">{dislikes}</p>
            <button onClick={()=>this.dislike()}>
              <FaThumbsDown size={40}/>
            </button>
          </div>
          <div className="ratings-container">
            <p>Positivas</p>
            <p className="counter">{likes}</p>
            <button onClick={()=>this.like()}> 
              <FaThumbsUp size={40} />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
