import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";
import { useRemoveToast } from "../ToastProvider";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ toast }) {
  const { message, variant } = toast;

  const Icon = ICONS_BY_VARIANT[variant];
  const variantClassName = styles[variant];

  const dismissToast = useRemoveToast();

  return (
    <div className={`${styles.toast} ${variantClassName}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>

      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>

        {message}
      </p>

      <button
        className={styles.closeButton}
        onClick={() => dismissToast(toast)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default React.memo(Toast);
