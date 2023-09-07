import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import TodoProvider from "./context/TodoContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
