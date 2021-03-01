import { useState, useCallback, useRef } from 'react';

import { Post } from 'shared/models';
import api from 'shared/utils/api';

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: any;
  hasLoadedSomeTime: boolean;
}

interface UseGetPostsReturn extends PostsState {
  getPosts: () => Promise<void>;
}

const LIMIT = 10;

const useGetPosts: () => UseGetPostsReturn = () => {
  const pageRef = useRef(0);
  const totalRef = useRef<number | null>(null);

  const [state, setState] = useState<PostsState>({
    posts: [],
    loading: false,
    error: null,
    hasLoadedSomeTime: false,
  });

  const getPosts = useCallback(async () => {
    if (totalRef.current && pageRef.current * LIMIT >= totalRef.current) {
      return;
    }

    setState((oldState) => ({
      ...oldState,
      error: null,
      loading: true,
    }));

    try {
      const response = await api.get('posts', {
        params: {
          _start: LIMIT * pageRef.current,
          _limit: LIMIT,
        },
      });

      totalRef.current = +response.headers['x-total-count'];

      // eslint-disable-next-line no-plusplus
      pageRef.current++;

      setTimeout(() => {
        setState((oldState) => ({
          ...oldState,
          loading: false,
          posts: [...oldState.posts, ...response.data],
          hasLoadedSomeTime: true,
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
