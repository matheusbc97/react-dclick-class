import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  width: 75%;
  max-width: 600px;
  max-height: 75%;
  padding: 30px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.div`
  background-color: #bdbdbd;
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const UserName = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`;

export const Text = styled.p`
  margin: 5px 0;
`;

export const WroteAtText = styled.p`
  margin: 0;
  margin-top: 15px;
  font-size: 16px;
  color: #9e9e9e;
  align-self: flex-end;
`;

export const Content = styled.div`
  overflow-y: auto;
  height: 100%;
`;
