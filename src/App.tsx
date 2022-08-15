import { BrowserRouter } from "react-router-dom";
import Div100vh from "react-div-100vh";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { Router } from "./router/Router";
import { LoginUserProvider } from "./providers/LoginUserProvider";
import { Header } from "./components/organisms/Header";

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
  body {
    background: #9B9B9B;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }

  #Div100vh {
    width: 100vw;
    overflow: hidden;
    background-image: radial-gradient(#9B9B9B 3%, #F2F2F2 3%);
    background-size: 20px 20px;
    background-repeat: repeat;

    @media screen and (min-width: 960px){
      width: 600px;
    }
  }
`;
