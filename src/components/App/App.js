import React from "react";

import ToastPlayground from "../ToastPlayground";
import { ToastProvider } from "../ToastProvider";
import ToastShelf from "../ToastShelf";

import Footer from "../Footer";

function App() {
  return (
    <>
      <ToastProvider>
        <ToastPlayground />
        <ToastShelf />
      </ToastProvider>
      <Footer />
    </>
  );
}

export default App;
