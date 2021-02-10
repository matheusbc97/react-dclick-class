/* eslint-disable no-undef */
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default Navigation;
