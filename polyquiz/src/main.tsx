import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserProvider from "./context/UserContext";

const root = document.getElementById("root");

if (!root) throw new Error("Root not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);