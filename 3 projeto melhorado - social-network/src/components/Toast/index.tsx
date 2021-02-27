import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { hideToastAction } from '../../store/toast/actions';
import { RootState } from '../../store/configureStore';
import { ToastTypes } from '../../store/toast/reducer';

interface ContainerProps {
  color: string;
}

const transitionName = 'toast';

const Container = styled.div<ContainerProps>`
  width: 300px;
  background-color: ${(props) => props.color};
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px;
  color: white;
  border-radius: 5px;

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

const Toast: React.FC = () => {
  const dispatch = useDispatch();
  const toastOptions = useSelector((state: RootState) => state.toast);

  useEffect(() => {
    if (toastOptions.active) {
      setTimeout(() => {
        dispatch(hideToastAction());
      }, 3000);
    }
  }, [toastOptions, dispatch]);

  const color = useMemo<string>(() => {
    switch (toastOptions.type) {
      case 'danger':
        return '#ff3d00';
      case 'success':
        return 'green';
      case 'warning':
        return 'yellow';
      default:
        return 'black';
    }
  }, [toastOptions.type]);

  return (
    <CSSTransition
      in={toastOptions.active}
      timeout={200}
      classNames="toast"
      unmountOnExit
    >
      <Container color={color} data-testid="toast-container">
        {toastOptions.text}
      </Container>
    </CSSTransition>
  );
};

export default Toast;
