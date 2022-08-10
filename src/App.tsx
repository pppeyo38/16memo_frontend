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
  a {
    cursor: pointer;
    text-decoration: none;
  }
`;

const Display100vh = {
  overflow: "hidden",
  backgounrdColor: "#F2F2F2",
  backgroundImage: "radial-gradient(#9B9B9B 3%, transparent 3%)",
  backgroundSize: "20px 20px",
  backgroundRepeat: "repeat",
};
