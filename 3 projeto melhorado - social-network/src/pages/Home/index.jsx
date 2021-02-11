/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Post from './Post';
import { setUserAction } from '../../store/user/actions';

import api from '../../utils/api';

import { Chronometer } from '../../components';

import { Container, Header, Content, UserName } from './styles';

import useUser from '../../hooks/useUser';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();
  const chronometerRef = useRef(null);

  const { user } = useUser();

  useEffect(() => {
    const getPosts = async () => {
      try {
        dispatch(
          setUserAction({
            name: 'qualquer',
          }),
        );

        const response = await api.get('posts');

        setPosts(response.data);

        chronometerRef.current.startChronometer();
      } catch (error) {
        console.log('error');
      }
    };

    getPosts();
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <UserName>{user && user.name}</UserName>

        <Chronometer ref={chronometerRef} />
      </Header>
      <Content>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </Content>
    </Container>
  );
};

export default Home;
