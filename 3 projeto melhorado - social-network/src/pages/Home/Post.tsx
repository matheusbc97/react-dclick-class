import React, { memo, useMemo } from 'react';
import formatDate from '../../utils/formatDate';
import { Post } from '../../models';

import { PostContainer, PostText, PostFooterText } from './styles';

interface Props {
  post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => {
  const wroteBy = useMemo(
    () => `Escrito por: ${post.user} em ${formatDate(post.date)}`,
    [post.date, post.user],
  );

  return (
    <PostContainer>
      <PostText>{post.text}</PostText>
      <PostFooterText>{wroteBy}</PostFooterText>
    </PostContainer>
  );
};

export default memo(PostCard);
