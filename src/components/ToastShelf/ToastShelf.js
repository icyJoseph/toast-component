import React from "react";

// import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ children }) {
  const toasts = React.Children.map(children, (toast) => {
    return (
      <li className={styles.toastWrapper}>
        {React.cloneElement(toast, toast.props)}
      </li>
    );
  });

  return <ol className={styles.wrapper}>{toasts}</ol>;
}

export default ToastShelf;
