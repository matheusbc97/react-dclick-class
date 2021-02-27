import { createContext, useCallback, useState } from 'react';

interface Toast {
  id: number;
  active: boolean;
  text: string;
  type: ToastTypes;
}

interface ToastContextData {
  toasts: Toast[];
  showToast: (toast: Toast) => void;
}

export type ToastTypes = 'success' | 'warning' | 'danger' | null;

const ToastContext = createContext({} as ToastContextData);

const removeItemFromArray = (state: any[], id: number) => {
  const stateCopy = {
    ...state,
  };

  const index = stateCopy.findIndex((item) => item.id === id);

  stateCopy.splice(index, 1);

  return stateCopy;
};

const pushItemToArray = (state: any[], item: any) => {
  const stateCopy = {
    ...state,
  };

  stateCopy.push(item);

  return item;
};

const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const hideToast = useCallback((id: number) => {
    setToasts((oldState) => removeItemFromArray(oldState, id));
  }, []);

  const showToast = useCallback(
    (toast: any) => {
      setToasts((oldState) => pushItemToArray(oldState, toast));
      setTimeout(() => hideToast(toast.id), 3000);
    },
    [hideToast],
  );

  return (
    <ToastContext.Provider value={{ toasts, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
