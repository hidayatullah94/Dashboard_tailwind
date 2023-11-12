import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalContext } from "./context/GlobalContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalContext>
    </QueryClientProvider>
  </React.StrictMode>
);
