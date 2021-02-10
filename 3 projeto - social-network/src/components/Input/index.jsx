/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 5px 0;
  align-items: center;
  border: 1px solid #e6e6e6;
  width: 100%;
  padding: 5px 5px;
  border-radius: 3px;
`;

const InputHtml = styled.input`
  border: none;
  outline: none;
  width: 100%;
  margin-left: 10px;
`;

export default class LoginInput extends Component {
  render() {
    const { onChange, value, placeholder, type } = this.props;
    return (
      <Container>
        <InputHtml
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
        />
      </Container>
    );
  }
}
