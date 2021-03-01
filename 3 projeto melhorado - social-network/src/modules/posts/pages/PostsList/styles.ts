import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 440px;
`;

export const ExitButton = styled.button`
  margin-right: 20px;
  background-color: #64b5f6;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  color: white;
  -webkit-box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);

  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #72b9f2;
  }
`;

export const Header = styled.div`
  height: 60px;
  background: #e6e6e6;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const UserName = styled.p`
  margin: 0;
  margin-left: 20px;
`;

export const Title = styled.p`
  margin: 0;
  font-weight: bold;
  color: #424242;
`;

export const CreateNewPostContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  textarea {
    margin-top: 10px;
    border: #e0e0e0 1px solid;
    border-radius: 2px;
    outline: none;
    padding: 5px 5px;
    height: 77px;
    width: 430px;
    resize: none;
  }

  Button {
    align-self: flex-end;
    margin-top: 10px;
  }
`;

export const ListContainer = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
