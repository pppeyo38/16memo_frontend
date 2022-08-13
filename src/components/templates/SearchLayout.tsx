import { FC, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Font } from "../../style/Font";
import { ColorTheme } from "../../style/ColorTheme";
import { SearchForm } from "../atoms/SearchForm";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { SearchResult } from "../organisms/SearchResult";
import shareIcon from "../../images/shareIcon.svg";
import { TwitterShareButton, TwitterIcon } from "react-share";

type Props = {
  isResult: boolean;
  setIsResult: Dispatch<SetStateAction<boolean>>;
  searchTag: string;
  setSearchTag: Dispatch<SetStateAction<string>>;
};

export const SearchLayout: FC<Props> = (props) => {
  const { isResult, setIsResult, searchTag, setSearchTag } = props;
  const navigate = useNavigate();

  const onBack = () => {
    setIsResult(false);
    setSearchTag("");
    navigate("/search");
  };

  return (
    <>
      <Content>
        <Head>
          {isResult && (
            <ReturnArrow onClick={() => onBack()} color={"#161616"} />
          )}
        </Head>
        <Title>{isResult ? `${searchTag}` : "検索"}</Title>
        {!isResult ? (
          <SearchForm
            searchTag={searchTag}
            setSearchTag={setSearchTag}
            setIsResult={setIsResult}
          />
        ) : (
          <SearchResult tagName={searchTag} />
        )}
      </Content>
    </>
  );
};

const { fontFamily, fontWeight } = Font;
const { palette } = ColorTheme;

const Content = styled.div`
  width: 340px;
  margin: 35px auto 0;
`;

const Head = styled.div`
  height: 35px;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  margin-bottom: 13px;
  color: ${palette.black};
  font-family: ${fontFamily.Noto};
  font-size: 24px;
  line-height: 1.45;
  font-weight: ${fontWeight.bold};
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
