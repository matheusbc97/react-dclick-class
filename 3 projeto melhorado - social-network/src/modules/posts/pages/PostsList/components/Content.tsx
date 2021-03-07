import { useEffect, useRef } from 'react';
import { Content as StyledContent } from '../styles';
import useOnScrollEnd from '../hooks/useOnScrollEnd';

interface Props {
  onScrollEnd(): void;
}

const Content: React.FC<Props> = ({ children, onScrollEnd }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const onScrollToEnd = useOnScrollEnd(divRef, onScrollEnd);

  useEffect(() => {
    window.onscroll = onScrollToEnd;
  }, [onScrollToEnd]);

  return <StyledContent>{children}</StyledContent>;
};

export default Content;
