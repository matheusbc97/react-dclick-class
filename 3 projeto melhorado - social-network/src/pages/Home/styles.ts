import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const PostContainer = styled.div`
  padding: 20px;
  -webkit-box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  margin: 10px 20px;
  background-color: #fff;
  max-width: 450px;
  cursor: pointer;
`;

export const PostText = styled.p`
  margin: 0;
  margin-bottom: 10px;
`;

export const PostFooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #9e9e9e;
`;

export const UserName = styled.p`
  margin: 0;
  margin-left: 20px;
`;
