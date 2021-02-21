import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PostCard from './Post';

import api from '../../utils/api';

import { Header } from '../../components';

import { Post } from '../../models';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await api.get('posts');

        setPosts(response.data);
      } catch (error) {
        console.log('error');
      }
    };

    getPosts();
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Content>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </Content>
    </Container>
  );
};

export default Home;
