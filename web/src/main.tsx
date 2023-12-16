import React from "react";
import ReactDOM from "react-dom/client";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import AppProvider from "./providers/AppProvider";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./app/theme";
import { store } from "./app/store";
import App from "./components/App";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <AppProvider>
          <VisibilityProvider>
            <App />
          </VisibilityProvider>
        </AppProvider>
      </ChakraProvider>
    </ReduxProvider>
  </React.StrictMode>
);
