import React from "react";

import Toast from "../Toast";
import { useToastQueue } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const toasts = useToastQueue();

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast toast={toast} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
