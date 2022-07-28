import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { Router } from "./router/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename="/">
        <Router />
      </BrowserRouter>
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
