import { useMemo } from 'react';

const useFormatTime = (time: number) =>
  useMemo(() => (time < 10 ? `0${time}` : time), [time]);

export default useFormatTime;
