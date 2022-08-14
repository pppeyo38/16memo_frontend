import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { worker } from "./api/browser";
import { ThemeProvider } from "styled-components";
import { Theme } from "./style/Theme";
import { ChakraProvider } from "@chakra-ui/react";

if (import.meta.env.DEV) {
  worker.start({
    onUnhandledRequest: "bypass",
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={Theme}>
    <ChakraProvider>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </ChakraProvider>
  </ThemeProvider>
);
