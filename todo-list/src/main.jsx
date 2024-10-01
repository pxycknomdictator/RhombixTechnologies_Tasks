import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { TodoContextProvider } from "./store/TodoContextProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
