import React, { Component } from 'react';
import styled from 'styled-components';

export const ChronometerContainer = styled.div`
  margin-left: 20px;
`;

export const ChronometerTime = styled.p`
  margin: 0;
`;

export const ChronometerText = styled.p`
  margin: 0;
`;

export default class Chronometer extends Component {
  constructor() {
    super();

    this.state = {
      chronometer: 0,
    };
  }

  startChronometer() {
    const { chronometer } = this.state;

    setTimeout(() => {
      this.setState({ chronometer: chronometer + 1 });
      this.startChronometer();
    }, 1000);
  }

  render() {
    const { chronometer } = this.state;
    return (
      <ChronometerContainer>
        <ChronometerText>Tempo de sessão:</ChronometerText>
        <ChronometerTime>{chronometer}</ChronometerTime>
      </ChronometerContainer>
    );
  }
}
