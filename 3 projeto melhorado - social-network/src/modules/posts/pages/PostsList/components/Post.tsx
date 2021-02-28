import React, { memo, useCallback } from 'react';
import styled from 'styled-components';

import { useWroteAt } from 'shared/hooks';
import { Post } from 'shared/models';
import { Avatar } from 'shared/components';

interface Props {
  post: Post;
  onClick: (post: Post) => void;
}

const PostCard: React.FC<Props> = ({ post, onClick }) => {
  const wroteAt = useWroteAt(post.date);

  const handleOnClick = useCallback(() => onClick(post), [post, onClick]);

  return (
    <Container onClick={handleOnClick}>
      <Header>
        <Avatar size={20} />
        <p>{post.user}</p>
      </Header>
      <Text>{post.text}</Text>
      <FooterText>{wroteAt}</FooterText>
    </Container>
  );
};

export default memo(PostCard);

const Container = styled.article`
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
