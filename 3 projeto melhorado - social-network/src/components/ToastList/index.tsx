import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { RootState } from '../../store/configureStore';
import Toast from './Toast';

const Container = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`;

const ToastList: React.FC = () => {
  const toasts = useSelector((state: RootState) => state.toast);

  return (
    <Container>
      <TransitionGroup className="toast-list">
        {toasts.map((toast) => (
          <CSSTransition timeout={2000} classNames="toast" unmountOnExit>
            <Toast toast={toast} key={`toast-${toast.id}`} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default ToastList;
