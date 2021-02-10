/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { setUserAction } from '../../store/user/actions';

import api from '../../utils/api';

import { Chronometer } from '../../components';

import { Container, Header, Content } from './styles';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    try {
      const { setUserAction: setUser } = this.props;
      setUser({
        name: 'qualquer',
      });

      const response = await api.get('posts');

      this.setState({ posts: response.data });

      this.chronometerRef.startChronometer();
    } catch (error) {
      console.log('error');
    }
  }

  render() {
    const { posts } = this.state;

    return (
      <Container>
        <Header>
          <Chronometer
            ref={(ref) => {
              this.chronometerRef = ref;
            }}
          />
        </Header>
        <Content>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { setUserAction })(Home);
