import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PostCard from './Post';

import api from '../../utils/api';

import { Header, Loading, Modal, ModalHandles } from '../../components';

import { Post } from '../../models';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const modalRef = useRef<ModalHandles>(null);

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

  const handlePostClick = useCallback(() => {
    modalRef.current?.open();
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
      <Modal ref={modalRef}>
        <div style={{ background: 'white', width: '300px', height: '300px' }} />
      </Modal>
    </Container>
  );
};

export default Home;
