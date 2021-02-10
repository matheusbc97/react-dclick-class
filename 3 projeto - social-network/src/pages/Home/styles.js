import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  margin: 5px 0;
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
  border: 1px solid #424242;
  border-radius: 3px;
  margin: 10px;
`;

export const PostText = styled.p`
  margin: 0;
  margin-bottom: 10px;
`;

export const PostFooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;
