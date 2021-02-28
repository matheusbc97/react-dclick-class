import { useMemo, useRef, useCallback, useEffect } from 'react';

import { useGetPosts } from 'shared/hooks';
import { Loading, ErrorIndicator } from 'shared/components';
import { Post } from 'shared/models';

import { Container, Content } from './styles';
import PostCard from './components/Post';
import PostDetailsModal, {
  PostDetailsModalHandles,
} from './components/PostDetailsModal';

const PostsList: React.FC = () => {
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
    <>
      <Container>{content}</Container>
      <PostDetailsModal ref={modalRef} />
    </>
  );
};

export default PostsList;
