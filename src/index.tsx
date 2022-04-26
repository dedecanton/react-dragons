/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";

// import "./index.css";
import App from "./App";
import './index.css'

import { AuthProvider } from "./context/auth-context";

import { createRoot } from "react-dom/client";
import { GlobalStyles } from "twin.macro";
import { DragonsProvider } from "./context/dragons-context";
const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <DragonsProvider>
      <App />
      </DragonsProvider>
    </AuthProvider>
     {/* tailwindcss global styles */}
    <GlobalStyles />
  </React.StrictMode>
);
