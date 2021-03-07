import React, { useMemo } from 'react';
import styled from 'styled-components';

import { ToastOptions } from 'store/toast/reducer';
import { TOAST_COLORS } from 'assets/colors';

interface ContainerProps {
  color: string;
}

const transitionName = 'toast';

const Container = styled.div<ContainerProps>`
  width: 300px;
  background-color: ${(props) => props.color};
  padding: 15px;
  color: white;
  border-radius: 5px;

  & + & {
    margin-top: 10px;
  }

  &.${transitionName}-enter {
    opacity: 0;
  }

  &.${transitionName}-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }

  &.${transitionName}-exit {
    opacity: 1;
  }

  &.${transitionName}-exit-active {
    opacity: 0;

    transition: opacity 300ms;
  }
`;

interface Props {
  toast: ToastOptions;
}

const Toast: React.FC<Props> = ({ toast }) => {
  const color = useMemo<string>(() => {
    switch (toast.type) {
      case 'danger':
        return TOAST_COLORS.DANGER;
      case 'success':
        return TOAST_COLORS.SUCCESS;
      case 'warning':
        return TOAST_COLORS.WARNING;
      default:
        return TOAST_COLORS.DEFAULT;
    }
  }, [toast.type]);

  return (
    <Container color={color} data-testid="toast-container">
      {toast.text}
    </Container>
  );
};

export default Toast;
