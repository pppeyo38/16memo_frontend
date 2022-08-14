import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGetFiles } from "../../hooks/files/useGetFiles";
import { Header } from "../organisms/Header";
import { FilesLayout } from "../templates/FilesLayout";
import { DotBg } from "../templates/bg/DotBg";
import { LogoWhite } from "../atoms/LogoWhite";
import { useMediaQuery } from "@chakra-ui/react";
import styled from "styled-components";

export const Files = () => {
  const { filesData, getFilesData } = useGetFiles();
  const location = useLocation();
  const [isDesktop] = useMediaQuery("(min-width: 960px)");

  useEffect(() => {
    getFilesData();
  }, [location.state]);

  return (
    <PCWrap>
      {isDesktop && <LogoWhite />}
      <DotBg>
        <FilesLayout filesData={filesData} />
      </DotBg>
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
