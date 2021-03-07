import { HEADER_HEIGHT } from 'navigation/components/Header';
import { useCallback } from 'react';

const useGetPostsOnScrollToEnd: (
  divRef: React.RefObject<HTMLDivElement>,
  callback: () => void,
) => () => void = (divRef, callback) => {
  const onScrollToEnd = useCallback(() => {
    const offsetHeight = divRef.current?.offsetHeight
      ? divRef.current?.offsetHeight
      : 0;

    if (
      window.innerHeight + document.documentElement.scrollTop - HEADER_HEIGHT >
      offsetHeight - 300
    ) {
      callback();
    }
  }, [callback, divRef]);

  return onScrollToEnd;
};

export default useGetPostsOnScrollToEnd;
