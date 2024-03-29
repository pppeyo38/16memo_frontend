import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import search from "../../images/search.svg";

type Props = {
  searchTag: string;
  setSearchTag: Dispatch<SetStateAction<string>>;
  setIsResult: Dispatch<SetStateAction<boolean>>;
};

export const SearchForm = ({ searchTag, setSearchTag, setIsResult }: Props) => {
  const navigate = useNavigate();
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTag(e.target.value);

  //Enterキー押した時の処理
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== "Enter") {
      return;
    } else {
      if (searchTag.slice(0, 1) === "#") searchTag = searchTag.slice(1);
    }
    navigate(`/search?tag=${searchTag}`);
    setIsResult(true);
  };

  return (
    <SearchFormContainer>
      <SearchIcon>
        <img src={search} alt="検索アイコン" />
      </SearchIcon>
      <SearchInputForm
        type="text"
        value={searchTag}
        onChange={onChangeText}
        placeholder="#名前やキーワードなど"
        onKeyDown={handleKeyDown}
      />
    </SearchFormContainer>
  );
};

const SearchFormContainer = styled.div`
  width: 340px;
  height: 30px;
  position: relative;
`;

const SearchIcon = styled.div`
  width: 17px;
  height: 17px;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  img {
    width: 100%;
    height: 100%;
  }
`;

const SearchInputForm = styled.input`
  width: 100%;
  height: 100%;
  padding: 7px 18px 8px 37px;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: 14px;
  border-radius: 15px;
  ::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
  :focus {
    outline: none;
  }
`;
