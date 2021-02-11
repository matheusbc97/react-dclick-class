import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PostCard from './Post';
import { setUserAction } from '../../store/user/actions';

import api from '../../utils/api';

import { Chronometer } from '../../components';

import { Post } from '../../models';

import { Container, Header, Content, UserName } from './styles';

import useUser from '../../hooks/useUser';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

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

        // chronometerRef.current.startChronometer();
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
          <PostCard post={post} key={post.id} />
        ))}
      </Content>
    </Container>
  );
};

export default Home;
