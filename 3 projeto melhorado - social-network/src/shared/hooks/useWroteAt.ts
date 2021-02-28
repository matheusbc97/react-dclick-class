import { useMemo } from 'react';
import formatDate from 'shared/utils/formatDate';

const useWroteAt: (date: string | null | undefined) => string = (date) => {
  const wroteAt = useMemo(() => {
    if (!date) {
      return '';
    }

    return `Escrito em ${formatDate(date)}`;
  }, [date]);

  return wroteAt;
};

export default useWroteAt;
