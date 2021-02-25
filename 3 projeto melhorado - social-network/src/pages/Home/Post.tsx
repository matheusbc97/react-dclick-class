import React, { memo, useMemo } from 'react';
import styled from 'styled-components';

import formatDate from '../../utils/formatDate';
import { Post } from '../../models';

const Container = styled.div`
  padding: 20px;
  -webkit-box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  margin: 10px 20px;
  background-color: #fff;
  max-width: 400px;
  width: 100%;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  align-items: center;

  div {
    background-color: #afafaf;
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  p {
    font-weight: bold;
    margin: 0;
    margin-left: 10px;
  }
`;

const Text = styled.p`
  margin: 15px 0 10px 0;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #9e9e9e;
  text-align: end;
`;

interface Props {
  post: Post;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const PostCard: React.FC<Props> = ({ post, onClick }) => {
  const wroteWhen = useMemo(() => `Escrito em ${formatDate(post.date)}`, [
    post.date,
  ]);

  return (
    <Container onClick={onClick}>
      <Header>
        <div />
        <p>{post.user}</p>
      </Header>
      <Text>{post.text}</Text>
      <FooterText>{wroteWhen}</FooterText>
    </Container>
  );
};

export default memo(PostCard);
