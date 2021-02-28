import { useState, useCallback } from 'react';

import { Post } from 'shared/models';
import api from 'shared/utils/api';

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: any;
}

interface UseGetPostsReturn extends PostsState {
  getPosts: () => Promise<void>;
}

const useGetPosts: () => UseGetPostsReturn = () => {
  const [state, setState] = useState<PostsState>({
    posts: [],
    loading: false,
    error: null,
  });

  const getPosts = useCallback(async () => {
    setState((oldState) => ({
      ...oldState,
      error: null,
      loading: true,
    }));

    try {
      const response = await api.get('posts');

      setTimeout(() => {
        setState((oldState) => ({
          ...oldState,
          loading: false,
          posts: response.data,
        }));
      }, 1000);
    } catch (error) {
      setState((oldState) => ({
        ...oldState,
        error,
        loading: false,
      }));
      console.log('error');
    }
  }, []);

  return {
    ...state,
    getPosts,
  };
};

export default useGetPosts;
