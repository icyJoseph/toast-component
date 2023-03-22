import React from "react";

import Button from "../Button";

import Toast from "../Toast";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );

  const [message, setMessage] = React.useState("");
  const [toastQueue, setToastQueue] = React.useState([]);

  const popToast = () => {
    setToastQueue((prev) => {
      return [
        ...prev,
        { id: crypto.randomUUID(), variant: selectedVariant, message },
      ];
    });
  };

  const resetForm = () => {
    setMessage("");
    setSelectedVariant(VARIANT_OPTIONS[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    popToast();
    resetForm();
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf>
        {toastQueue.map((toast) => (
          <Toast
            key={toast.id}
            variant={toast.variant}
            message={toast.message}
            onDismiss={() => {
              setToastQueue((prev) =>
                prev.filter((item) => item.id !== toast.id)
              );
            }}
          />
        ))}
      </ToastShelf>

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>

          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => {
              return (
                <label key={variant} htmlFor={`variant-${variant}`}>
                  <input
                    id={`variant-${variant}`}
                    type="radio"
                    name={variant}
                    value={variant}
                    checked={selectedVariant === variant}
                    onChange={(e) => {
                      setSelectedVariant(e.target.value);
                    }}
                  />
                  {variant}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />

          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
