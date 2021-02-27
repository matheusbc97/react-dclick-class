import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useCallback,
  useState,
  memo,
} from 'react';
import { FaTimesCircle } from 'react-icons/fa';

import { Modal, ModalHandles } from '../../../components';
import { useWroteAt } from '../../../hooks';
import { Post } from '../../../models';

import {
  Avatar,
  CloseButton,
  Container,
  Content,
  Header,
  Text,
  UserName,
  WroteAtText,
} from './styles';

export interface PostDetailsModalHandles {
  open: (post: Post) => void;
  close: () => void;
}

const PostDetails: React.ForwardRefRenderFunction<PostDetailsModalHandles> = (
  {},
  ref,
) => {
  const modalRef = useRef<ModalHandles>(null);

  const [post, setPost] = useState<Post | null>(null);

  const wroteAt = useWroteAt(post?.date);

  const closePostDetails = useCallback(() => modalRef.current?.close(), []);

  useImperativeHandle(
    ref,
    () => ({
      open: (postToShow: Post) => {
        modalRef.current?.open();
        setPost(postToShow);
      },
      close: closePostDetails,
    }),
    [closePostDetails],
  );

  return (
    <Modal ref={modalRef}>
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
    </Modal>
  );
};

export default memo(forwardRef(PostDetails));
