import { useMemo, useRef, useCallback, useEffect } from 'react';

import { Header, Loading } from '../../components';
import { Post } from '../../models';
import { useGetPosts } from '../../hooks';
import { ErrorIndicator } from '../../components';

import { Container, Content } from './styles';
import PostCard from './components/Post';
import PostDetailsModal, {
  PostDetailsModalHandles,
} from './components/PostDetailsModal';

const Home: React.FC = () => {
  const modalRef = useRef<PostDetailsModalHandles>(null);

  const { loading, posts, getPosts, error } = useGetPosts();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const handlePostClick = useCallback((post: Post) => {
    modalRef.current?.open(post);
  }, []);

  const content = useMemo(() => {
    if (error) {
      return <ErrorIndicator />;
    }

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
  }, [posts, loading, handlePostClick, error]);

  return (
    <Container>
      <Header />
      {content}
      <PostDetailsModal ref={modalRef} />
    </Container>
  );
};

export default Home;
