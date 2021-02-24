import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { hideToastAction } from '../../store/toast/actions';
import { RootState } from '../../store/configureStore';
import { ToastTypes } from '../../store/toast/reducer';

interface ContainerProps {
  color: string;
}

const Container = styled.div<ContainerProps>`
  width: 300px;
  background-color: ${(props) => props.color};
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 15px;
  color: white;
  border-radius: 5px;
`;

const Toast: React.FC = () => {
  const dispatch = useDispatch();
  const toastOptions = useSelector((state: RootState) => state.toast);

  useEffect(() => {
    setTimeout(() => dispatch(hideToastAction()), 3000);
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

  if (toastOptions.active) {
    return (
      <Container color={color} data-testid="toast-container">
        {toastOptions.text}
      </Container>
    );
  }

  return null;
};

export default Toast;
