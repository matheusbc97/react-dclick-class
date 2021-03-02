import { useMemo, useRef, useCallback, useEffect } from 'react';

import { useGetPosts, useCreatePost } from 'shared/hooks';
import { Loading, ErrorIndicator } from 'shared/components';
import { Post } from 'shared/models';

import PostCard from './components/Post';
import PostDetailsModal, {
  PostDetailsModalHandles,
} from './components/PostDetailsModal';
import CreateNewPost from './components/CreateNewPost';
import useGetPostsOnScrollToEnd from './hooks/useGetPostsOnScrollToEnd';

import { Container, Content, Title, ListContainer } from './styles';

const PostsList: React.FC = () => {
  const modalRef = useRef<PostDetailsModalHandles>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const { loading, posts, getPosts, error, hasLoadedSomeTime } = useGetPosts();
  const createPost = useCreatePost();

  const cantLoad = useMemo(() => loading || !!error, [loading, error]);

  const getPostsOnScroll = useCallback(() => {
    if (cantLoad) return;

    getPosts();
  }, [getPosts, cantLoad]);

  const onScrollToEnd = useGetPostsOnScrollToEnd(
    divRef,
    getPostsOnScroll,
    cantLoad,
  );

  useEffect(() => {
    window.onscroll = onScrollToEnd;
  }, [onScrollToEnd]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const handlePostClick = useCallback((post: Post) => {
    modalRef.current?.open(post);
  }, []);

  const handleCreatePostClick = useCallback(
    async (newPostText: string) => {
      await createPost(newPostText);
      getPosts();
    },
    [createPost, getPosts],
  );

  const content = useMemo(() => {
    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <Content ref={divRef}>
        <CreateNewPost onCreatePostClick={handleCreatePostClick} />
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
    handlePostClick,
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
