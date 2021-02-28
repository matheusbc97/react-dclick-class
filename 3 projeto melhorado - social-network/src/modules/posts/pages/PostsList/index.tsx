import { useMemo, useRef, useCallback, useEffect, useState } from 'react';

import { useGetPosts, useCreatePost } from 'shared/hooks';
import { Loading, ErrorIndicator, Button } from 'shared/components';
import { Post } from 'shared/models';

import { Container, Content, CreateNewPostContainer, Title } from './styles';
import PostCard from './components/Post';
import PostDetailsModal, {
  PostDetailsModalHandles,
} from './components/PostDetailsModal';

const PostsList: React.FC = () => {
  const modalRef = useRef<PostDetailsModalHandles>(null);

  const { loading, posts, getPosts, error } = useGetPosts();
  const [newPostText, setNewPostText] = useState('');

  const createPost = useCreatePost();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const handlePostClick = useCallback((post: Post) => {
    modalRef.current?.open(post);
  }, []);

  const handleCreatePostClick = useCallback(async () => {
    await createPost(newPostText);
    setNewPostText('');
    getPosts();
  }, [newPostText, createPost, getPosts]);

  const content = useMemo(() => {
    if (error) {
      return <ErrorIndicator />;
    }

    if (loading) {
      return <Loading style={{ marginTop: '40px' }} />;
    }

    return (
      <Content>
        <CreateNewPostContainer>
          <Title>Criar Novo Post</Title>
          <textarea
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
          />
          <Button onClick={handleCreatePostClick}>Salvar</Button>
        </CreateNewPostContainer>
        <Title style={{ alignSelf: 'flex-start', marginBottom: '5px' }}>
          Lista de Posts
        </Title>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} onClick={handlePostClick} />
        ))}
      </Content>
    );
  }, [
    posts,
    loading,
    error,
    newPostText,
    handlePostClick,
    setNewPostText,
    handleCreatePostClick,
  ]);

  return (
    <>
      <Container>{content}</Container>
      <PostDetailsModal ref={modalRef} />
    </>
  );
};

export default PostsList;
