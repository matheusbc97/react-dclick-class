import { useMemo, useRef, useCallback, useEffect, useState } from 'react';

import { useGetPosts, useCreatePost } from 'shared/hooks';
import { Loading, ErrorIndicator, Button } from 'shared/components';
import { Post } from 'shared/models';

import {
  Container,
  Content,
  CreateNewPostContainer,
  Title,
  ListContainer,
} from './styles';
import PostCard from './components/Post';
import PostDetailsModal, {
  PostDetailsModalHandles,
} from './components/PostDetailsModal';
import useOnScrollToEnd from './hooks/useOnScrollToEnd';

const PostsList: React.FC = () => {
  const modalRef = useRef<PostDetailsModalHandles>(null);

  const { loading, posts, getPosts, error, hasLoadedSomeTime } = useGetPosts();
  const [newPostText, setNewPostText] = useState('');
  const divRef = useRef<HTMLDivElement>(null);

  const createPost = useCreatePost();

  const getPostsOnScroll = useCallback(() => {
    const canLoad = loading || !!error;

    if (canLoad) return;

    getPosts();
  }, [error, getPosts, loading]);

  const onScrollToEnd = useOnScrollToEnd(divRef, getPostsOnScroll);

  useEffect(() => {
    window.onscroll = onScrollToEnd;
  }, [onScrollToEnd]);

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

    return (
      <Content ref={divRef}>
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
        <ListContainer>
          {posts.map((post) => (
            <PostCard post={post} key={post.id} onClick={handlePostClick} />
          ))}
          {posts.length === 0 && hasLoadedSomeTime && (
            <p>Nenhum Item encontrado</p>
          )}
          {loading && <Loading style={{ margin: '15px 0' }} />}
        </ListContainer>
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
    hasLoadedSomeTime,
  ]);

  return (
    <>
      <Container>{content}</Container>
      <PostDetailsModal ref={modalRef} />
    </>
  );
};

export default PostsList;
