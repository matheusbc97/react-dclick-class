import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { hideToastAction } from '../../store/toast/actions';

const Container = styled.div`
  width: 300px;
  background-color: #ff3d00;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 15px;
  color: white;
  border-radius: 5px;
`;

const Toast = () => {
  const dispatch = useDispatch();
  const toastOptions = useSelector((state) => state.toast);

  useEffect(() => {
    setTimeout(() => dispatch(hideToastAction()), 3000);
  }, [toastOptions, dispatch]);

  if (toastOptions.active) {
    return <Container>{toastOptions.text}</Container>;
  }

  return null;
};

export default Toast;
