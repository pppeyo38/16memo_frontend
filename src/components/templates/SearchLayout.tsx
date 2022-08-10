import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Font } from "../../style/Font";
import { ColorTheme } from "../../style/ColorTheme";
import { SearchForm } from "../atoms/SearchForm";
import shareIcon from "../../images/shareIcon.svg";
import { TwitterShareButton, TwitterIcon } from "react-share";

type Props = {
  ttl: string;
  children?: ReactNode;
  isSearchResult: boolean;
};

export const SearchLayout: FC<Props> = (props) => {
  const { ttl, children, isSearchResult } = props;

  return (
    <>
      <Display>
        <ArrowIcon to="/search" isSearchResult={isSearchResult}></ArrowIcon>
        <Container isSearchResult={isSearchResult}>
          <h1>{ttl}</h1>
          <TwitterShareButton url={"/"} title={"みんなも投稿してね！"}>
            <img src={shareIcon} />
          </TwitterShareButton>
        </Container>
        <FormWrapper isSearchResult={isSearchResult}>
          <SearchForm />
        </FormWrapper>
      </Display>
      <Overflow>{children}</Overflow>
    </>
  );
};

const { fontFamily, fontWeight } = Font;
const { palette } = ColorTheme;

const ArrowIcon = styled(Link)<{ isSearchResult: boolean }>`
  display: ${(props) => (props.isSearchResult ? "block" : "none")};
  position: fixed;
  top: 43px;
  margin-left: 11px;
  width: 12px;
  height: 12px;
  border-bottom: 2.8px solid ${palette.black};
  border-left: 2.8px solid ${palette.black};
  transform: rotate(45deg);
`;

const Display = styled.div`
  width: 340px;
  margin: auto;
`;

const Container = styled.div<{ isSearchResult: boolean }>`
  width: 340px;
  position: fixed;
  top: 95px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-family: ${fontFamily.Noto};
    font-weight: ${fontWeight.bold};
    font-size: 24px;
    color: ${palette.black};
  }
  img {
    display: ${(props) => (props.isSearchResult ? "block" : "none")};
    margin-right: 10px;
  }
`;

const FormWrapper = styled.div<{ isSearchResult: boolean }>`
  display: ${(props) => (props.isSearchResult ? "none" : "block")};
  position: fixed;
  top: 143px;
`;

const Overflow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100% - 186px);
  margin-top: 186px;
  overflow: scroll;
`;
