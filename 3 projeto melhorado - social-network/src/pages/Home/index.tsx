import { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import PostCard from './Post';

import api from '../../utils/api';

import { Header, Loading } from '../../components';

import { Post } from '../../models';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

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

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    getPosts();
  }, [dispatch]);

  const content = useMemo(() => {
    if (loading) {
      return <Loading style={{ marginTop: '40px' }} />;
    }

    return (
      <Content>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </Content>
    );
  }, [posts, loading]);

  return (
    <Container>
      <Header />
      {content}
    </Container>
  );
};

export default Home;
