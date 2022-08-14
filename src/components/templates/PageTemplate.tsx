import { ReactNode } from "react";
import { Header } from "../organisms/Header";
import { DotBg } from "./bg/DotBg";
import { LogoWhite } from "../atoms/LogoWhite";
import { useMediaQuery } from "@chakra-ui/react";
import styled from "styled-components";

export const PageTemplate = ({ children }: { children: ReactNode }) => {
  const [isDesktop] = useMediaQuery("(min-width: 960px)");

  return (
    <PCWrap>
      {isDesktop && <LogoWhite />}
      <DotBg>{children}</DotBg>
      <Header />
    </PCWrap>
  );
};

const PCWrap = styled.section`
  ${({ theme }) => theme.media.desktop`
    display: flex;
    justify-content: center;
    gap: 52px;
  `}
`;
