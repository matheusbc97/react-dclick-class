import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../utils/api';
import { Header, Loading } from '../../components';
import { Post } from '../../models';

import { Container, Content } from './styles';
import PostCard from './Post';
import PostDetailsModal, { PostDetailsModalHandles } from './PostDetailsModal';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const modalRef = useRef<PostDetailsModalHandles>(null);

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
  }, []);

  const handlePostClick = useCallback((post: Post) => {
    modalRef.current?.open(post);
  }, []);

  const content = useMemo(() => {
    if (loading) {
      return <Loading style={{ marginTop: '40px' }} />;
    }

    return (
      <Content>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} onClick={handlePostClick} />
        ))}
      </Content>
    );
  }, [posts, loading, handlePostClick]);

  return (
    <Container>
      <Header />
      {content}
      <PostDetailsModal ref={modalRef} />
    </Container>
  );
};

export default Home;
