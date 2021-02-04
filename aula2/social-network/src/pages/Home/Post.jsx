import React, { PureComponent } from 'react';
import formatDate from '../../utils/formatDate';

import { PostContainer, PostText, PostFooterText } from './styles';

export default class Post extends PureComponent {
  render() {
    const { post } = this.props;

    return (
      <PostContainer>
        <PostText>{post.text}</PostText>
        <PostFooterText>
          Escrito por: {post.user} em {formatDate(post.date)}
        </PostFooterText>
      </PostContainer>
    );
  }
}
