import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

import { HeaderLayout } from "./components/templates/HeaderLayout"
import { ComponentCatalog } from "./components/pages/ComponentCatalog"

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderLayout>
        <ComponentCatalog />
      </HeaderLayout>
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  ${reset}
`