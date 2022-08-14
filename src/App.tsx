import { BrowserRouter } from "react-router-dom";
import Div100vh from "react-div-100vh";
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
          <Div100vh style={Display100vh}>
            <Router />
          </Div100vh>
        </BrowserRouter>
      </LoginUserProvider>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: #9B9B9B;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
`;

const Display100vh = {
  overflow: "hidden",
};
