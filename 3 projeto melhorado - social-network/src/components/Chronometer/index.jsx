import React, {
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';
import styled from 'styled-components';

export const ChronometerContainer = styled.div`
  margin-left: 20px;
`;

export const ChronometerTime = styled.p`
  margin: 0;
`;

export const ChronometerText = styled.p`
  margin: 0;
`;

const Chronometer = ({}, ref) => {
  const [chronometer, setChronometer] = useState(0);

  const startChronometer = useCallback(() => {
    setTimeout(() => {
      setChronometer((oldState) => oldState + 1);
      startChronometer();
    }, 1000);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      startChronometer,
    }),
    [startChronometer],
  );

  return (
    <ChronometerContainer>
      <ChronometerText>Tempo de sessão:</ChronometerText>
      <ChronometerTime>{chronometer}</ChronometerTime>
    </ChronometerContainer>
  );
};

export default forwardRef(Chronometer);
