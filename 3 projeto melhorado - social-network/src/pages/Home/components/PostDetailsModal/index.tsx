import {
  forwardRef,
  useImperativeHandle,
  useCallback,
  useState,
  memo,
} from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';

import { useWroteAt } from '../../../../hooks';
import { Post } from '../../../../models';

import {
  Avatar,
  CloseButton,
  Container,
  Content,
  Header,
  Text,
  UserName,
  WroteAtText,
  Background,
} from './styles';

export interface PostDetailsModalHandles {
  open: (post: Post) => void;
  close: () => void;
}

const PostDetails: React.ForwardRefRenderFunction<PostDetailsModalHandles> = (
  {},
  ref,
) => {
  const [post, setPost] = useState<Post | null>(null);
  const [visible, setVisible] = useState(false);

  const wroteAt = useWroteAt(post?.date);

  const closePostDetails = useCallback(() => setVisible(false), []);

  useImperativeHandle(
    ref,
    () => ({
      open: (postToShow: Post) => {
        setPost(postToShow);
        setVisible(true);
      },
      close: closePostDetails,
    }),
    [closePostDetails],
  );

  return (
    <CSSTransition in={visible} timeout={200} classNames="modal" unmountOnExit>
      <Background>
        <Container>
          <Header>
            <CloseButton onClick={closePostDetails}>
              <FaTimesCircle size={25} style={{ color: '#424242' }} />
            </CloseButton>
            <Avatar />
            <UserName>{post?.user}</UserName>
          </Header>

          <Content>
            <Text>{post?.text}</Text>
          </Content>

          <WroteAtText>{wroteAt}</WroteAtText>
        </Container>
      </Background>
    </CSSTransition>
  );
};

export default memo(forwardRef(PostDetails));
