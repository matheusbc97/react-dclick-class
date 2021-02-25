import { useImperativeHandle, forwardRef, useState } from 'react';
import styled from 'styled-components';

export const Background = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface ModalHandles {
  open: () => void;
  close: () => void;
}

const Modal: React.ForwardRefRenderFunction<
  ModalHandles,
  { children: React.ReactNode }
> = ({ children }, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      open: () => {
        setOpen(true);
      },
      close: () => {
        setOpen(false);
      },
    }),
    [],
  );

  if (!open) {
    return null;
  }

  return <Background>{children}</Background>;
};

export default forwardRef(Modal);
