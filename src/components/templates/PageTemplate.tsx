import { ReactNode } from "react";
import { Header } from "../organisms/Header";
import { PCMenu } from "../organisms/PCMenu";
import { LogoWhite } from "../atoms/LogoWhite";
import { useMediaQuery } from "@chakra-ui/react";
import styled from "styled-components";

export const PageTemplate = ({ children }: { children: ReactNode }) => {
  const [isDesktop] = useMediaQuery("(min-width: 960px)");

  return (
    <>
      {isDesktop ? (
        <Wrap>
          <LogoWhite />
          {children}
          <PCMenu />
        </Wrap>
      ) : (
        <>
          {children}
          <Header />
        </>
      )}
    </>
  );
};

const Wrap = styled.section`
  display: flex;
  justify-content: center;
  gap: 52px;
`;
