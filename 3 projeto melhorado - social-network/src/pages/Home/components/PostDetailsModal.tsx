import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useCallback,
  useState,
  memo,
} from 'react';
import styled from 'styled-components';
import { FaTimesCircle } from 'react-icons/fa';

import { Modal, ModalHandles } from '../../../components';
import { useWroteAt } from '../../../hooks';
import { Post } from '../../../models';

export interface PostDetailsModalHandles {
  open: (post: Post) => void;
  close: () => void;
}

const Container = styled.div`
  background: white;
  width: 75%;
  max-width: 600px;
  max-height: 75%;
  padding: 30px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.div`
  background-color: #bdbdbd;
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

const UserName = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`;

const Text = styled.p`
  margin: 5px 0;
`;

const WroteAtText = styled.p`
  margin: 0;
  margin-top: 15px;
  font-size: 16px;
  color: #9e9e9e;
  align-self: flex-end;
`;

const Content = styled.div`
  overflow-y: auto;
  height: 100%;
`;

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
