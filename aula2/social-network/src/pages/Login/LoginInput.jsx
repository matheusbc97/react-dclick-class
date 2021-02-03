/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

import styled from 'styled-components';

const Container = styled.div`
  padding: 5px 0;
`;

const Content = styled.div`
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

const ErrorText = styled.p`
  font-size: small;
  color: red;
  margin: 0;
  margin-left: 5px;
`;

export default class LoginInput extends Component {
  getIcon() {
    const { icon } = this.props;
    if (icon === 'user') {
      return <FaUser size={23} color="#9e9e9e" />;
    }

    return <FaLock size={23} color="#9e9e9e" />;
  }

  render() {
    const { onChange, value, placeholder, type, hasError } = this.props;
    return (
      <Container>
        <Content>
          {this.getIcon()}
          <InputHtml
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            value={value}
          />
        </Content>
        {hasError && <ErrorText>Campo Obrigatório</ErrorText>}
      </Container>
    );
  }
}
