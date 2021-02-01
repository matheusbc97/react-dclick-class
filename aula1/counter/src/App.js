//import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <p>Contador</p>
        <p>0</p>
      </div>
    )
  }
}
