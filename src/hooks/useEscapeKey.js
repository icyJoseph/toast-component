import { useCallback } from "react";

export const useEscapeKey = () => {
  const subscribe = useCallback((callback) => {
    const handler = (event) => {
      if (event.key === "Escape") {
        callback();
      }
    };
    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);

  return subscribe;
};
