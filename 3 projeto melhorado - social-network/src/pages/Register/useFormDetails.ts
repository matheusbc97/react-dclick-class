import { useState, useCallback } from 'react';

const useFormDetails: <T>(
  initialValue: T,
) => [T, (key: string, value: string) => void] = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const setFormDetails = useCallback((key: string, value: string) => {
    setState((oldState) => ({
      ...oldState,
      [key]: value,
    }));
  }, []);

  return [state, setFormDetails];
};

export default useFormDetails;
