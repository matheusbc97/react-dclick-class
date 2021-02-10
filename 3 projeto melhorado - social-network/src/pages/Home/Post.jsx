/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

import { PostContainer, PostText, PostFooterText } from './styles';

class Post extends PureComponent {
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

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
