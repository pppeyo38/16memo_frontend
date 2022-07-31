import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { Router } from "./router/Router";
import { LoginUserProvider } from "./providers/LoginUserProvider";

function App() {
  return (
    <>
      <GlobalStyle />
      <LoginUserProvider>
        <BrowserRouter basename="/">
          <Router />
        </BrowserRouter>
      </LoginUserProvider>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  ${reset}
  a {
    cursor: pointer;
    text-decoration: none;
  }
`;
