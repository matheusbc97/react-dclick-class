import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { hideToastAction } from '../../store/toast/actions';

import './styles.css';

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: black;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class ScreenLoading extends Component {
  render() {
    const { screenLoading } = this.props;

    if (!screenLoading.active) {
      return null;
    }

    return (
      <Container>
        <div className="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    screenLoading: state.screenLoading,
  };
}

export default connect(mapStateToProps, { hideToast: hideToastAction })(
  ScreenLoading,
);
