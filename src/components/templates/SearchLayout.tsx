import { FC, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SearchForm } from "../atoms/SearchForm";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { TwitterShare } from "../atoms/Icon/TwitterShare";
import { SearchResult } from "../organisms/SearchResult";

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
        <Title>
          {isResult ? `#${searchTag}` : "検索"}
          {isResult && <TwitterShare tagName={searchTag} />}
        </Title>
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;

  ${({ theme }) => theme.media.desktop`
    max-width: 600px;
    height: 100vh;
  `}
`;

const Head = styled.div`
  width: 340px;
  height: 35px;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  width: 340px;
  margin-bottom: 13px;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: 24px;
  line-height: 1.45;
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
