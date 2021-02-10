import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { hideToastAction } from '../../store/toast/actions';

const Container = styled.div`
  width: 300px;
  background-color: #ff3d00;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 15px;
  color: white;
  border-radius: 5px;
`;

class Toast extends Component {
  componentDidUpdate(prevProps) {
    const { toastOptions, hideToast } = this.props;

    if (toastOptions !== prevProps.toastOptions) {
      setTimeout(() => hideToast(), 3000);
    }
  }

  render() {
    const { toastOptions } = this.props;
    if (toastOptions.active) {
      return <Container>{toastOptions.text}</Container>;
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    toastOptions: state.toast,
  };
}

export default connect(mapStateToProps, { hideToast: hideToastAction })(Toast);
