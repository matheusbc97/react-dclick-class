/* eslint-disable no-plusplus */
import React, {
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
  useRef,
  useEffect,
} from 'react';
import styled from 'styled-components';

import useFormatTime from './hooks/useFormatTime';

const ChronometerContainer = styled.div`
  margin-left: 20px;
`;

const ChronometerTime = styled.p`
  margin: 0;
`;

const ChronometerText = styled.p`
  margin: 0;
`;

export interface ChronometerHandles {
  startChronometer: () => void;
}

interface ChronometerTime {
  hours: number;
  minutes: number;
  seconds: number;
}

const Chronometer: React.ForwardRefRenderFunction<unknown> = ({}, ref) => {
  const componentIsRendered = useRef(true);

  useEffect(() => {
    return () => {
      componentIsRendered.current = false;
    };
  }, []);

  const [chronometer, setChronometer] = useState({
    minutes: 0,
    seconds: 0,
    hours: 0,
  });

  const addOneSecond = useCallback((chronometerTime: ChronometerTime) => {
    const newTime = {
      ...chronometerTime,
    };

    if (chronometerTime.seconds < 59) {
      newTime.seconds++;
    } else if (newTime.minutes < 59) {
      newTime.seconds = 0;
      newTime.minutes++;
    } else if (newTime.hours < 59) {
      newTime.seconds = 0;
      newTime.minutes = 0;
      newTime.hours++;
    }

    return newTime;
  }, []);

  const startChronometer = useCallback(() => {
    setTimeout(() => {
      if (componentIsRendered.current) {
        setChronometer((oldState) => addOneSecond(oldState));
        startChronometer();
      }
    }, 1000);
  }, [addOneSecond]);

  useImperativeHandle(
    ref,
    () => ({
      startChronometer,
    }),
    [startChronometer],
  );

  const seconds = useFormatTime(chronometer.seconds);
  const minutes = useFormatTime(chronometer.minutes);
  const hours = useFormatTime(chronometer.hours);

  return (
    <ChronometerContainer>
      <ChronometerText>Tempo de sessão:</ChronometerText>
      <ChronometerTime>
        {hours}:{minutes}:{seconds}h
      </ChronometerTime>
    </ChronometerContainer>
  );
};

export default forwardRef(Chronometer);
