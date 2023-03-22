import React from "react";

const ToastQueueContext = React.createContext();
const PopToastContext = React.createContext();
const RemoveToastContext = React.createContext();

export const ToastProvider = ({ children }) => {
  const [toastQueue, setToastQueue] = React.useState([]);

  const popToast = React.useCallback(({ message, variant }) => {
    setToastQueue((prev) => {
      return [...prev, { id: crypto.randomUUID(), variant, message }];
    });
  }, []);

  const removeToast = React.useCallback((toast) => {
    setToastQueue((prev) => prev.filter((item) => item !== toast));
  }, []);

  return (
    <PopToastContext.Provider value={popToast}>
      <RemoveToastContext.Provider value={removeToast}>
        <ToastQueueContext.Provider value={toastQueue}>
          {children}
        </ToastQueueContext.Provider>
      </RemoveToastContext.Provider>
    </PopToastContext.Provider>
  );
};

export const useToastQueue = () => {
  const ctx = React.useContext(ToastQueueContext);

  if (!ctx) {
    throw new Error("useToastQueue must be used under ToastQueue Context");
  }

  return ctx;
};

export const usePopToast = () => {
  const ctx = React.useContext(PopToastContext);

  if (!ctx) {
    throw new Error("usePopToast must be used under PopToast Context");
  }

  return ctx;
};

export const useRemoveToast = () => {
  const ctx = React.useContext(RemoveToastContext);

  if (!ctx) {
    throw new Error("useRemoveToast must be used under RemoveToast Context");
  }

  return ctx;
};
