import { HEADER_HEIGHT } from 'navigation/components/Header';
import { useCallback } from 'react';

const useGetPostsOnScrollToEnd: (
  divRef: React.RefObject<HTMLDivElement>,
  getPosts: () => void,
  cantLoad: boolean,
) => () => void = (divRef, getPosts, cantLoad) => {
  const onScrollToEnd = useCallback(() => {
    const offsetHeight = divRef.current?.offsetHeight
      ? divRef.current?.offsetHeight
      : 0;

    if (
      window.innerHeight + document.documentElement.scrollTop - HEADER_HEIGHT >
      offsetHeight - 300
    ) {
      if (cantLoad) return;

      getPosts();
    }
  }, [getPosts, divRef, cantLoad]);

  return onScrollToEnd;
};

export default useGetPostsOnScrollToEnd;
