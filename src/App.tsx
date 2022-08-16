import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { Router } from "./router/Router";
import { AuthProvider } from "./providers/AuthProvider";
import { AccountProvider } from "./providers/AccountProvider";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <AccountProvider>
          <BrowserRouter basename="/">
            <Router />
          </BrowserRouter>
        </AccountProvider>
      </AuthProvider>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: #9B9B9B;
    font-family: ${({ theme }) => theme.fontFamily.Noto};
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
      margin: 0 auto;
    }
  }
`;
