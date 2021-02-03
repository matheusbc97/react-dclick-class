import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: repeating-radial-gradient(#2196f3 0, #42a5f5, #64b5f6);
`;

export const Content = styled.div`
  width: 350px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.26);
  box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.26);
`;

export const Title = styled.p`
  font-size: 22px;
  color: #424242;
`;

export const LoginButton = styled.button`
  background-color: #0091ea;
  color: white;
  outline: none;
  border: none;
  height: 35px;
  width: 70px;
  font-size: 14px;
  border-radius: 2px;
  cursor: pointer;
  margin: 10px 0;
`;

export const RegisterButton = styled.button`
  background-color: none;
  color: #424242;
  outline: none;
  border: none;
  height: 35px;
  width: 100px;
  font-size: 14px;
  border-radius: 2px;
  cursor: pointer;
  margin: 10px 0;
`;
