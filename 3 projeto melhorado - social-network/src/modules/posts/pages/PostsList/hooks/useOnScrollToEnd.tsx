import { HEADER_HEIGHT } from 'navigation/components/Header';
import { useCallback } from 'react';

const useOnScrollToEnd: (
  divRef: React.RefObject<HTMLDivElement>,
  callback: (...params: any[]) => unknown,
) => () => void = (divRef, callback: (...params: any[]) => unknown) => {
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

export default useOnScrollToEnd;
