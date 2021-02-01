import styles from './App.module.scss'

import React, { Component } from 'react'

import RatingPanel from './components/RatingPanel'

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
      <div className={styles.container}>
        <p className={styles.title}>Avaliações</p>
        <div className={styles.content}>
          <RatingPanel 
            onClick={()=> this.dislike()} 
            label="Negativas" 
            value={dislikes} 
            type="dislike"
          />
          <RatingPanel 
            onClick={()=> this.like()} 
            label="Positivas" 
            value={likes} 
            type="like"
          />
        </div>
      </div>
    )
  }
}
