import { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import search from "../../images/search.svg";

export const SearchForm = () => {
  const [text, setText] = useState<string>("");
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  //Enterキー押した時の処理
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter'){
      return
    }else{
      setText("");
      //検索結果のURLどうするかをまだ話し合ってなかったので、ひとまず/searchに飛ぶようにした
      window.location.href = '/search';
    }
  }

  return(
    <SearchFormContainer>
      <SearchIcon><img src={search} alt="検索アイコン" /></SearchIcon>
      <SearchInputForm type="text" value={text} onChange={onChangeText} placeholder="#名前やキーワードなど" onKeyDown={handleKeyDown} />
    </SearchFormContainer>
  )
}

const { black, gray } = ColorTheme.palette;
const { Noto } = Font.fontFamily;

const SearchFormContainer = styled.div`
  width: 100%;
  height: 30px;
  position: relative;
`

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
`

const SearchInputForm = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px 18px 8px 37px;
  color: ${black};
  font-family: ${Noto};
  font-size: 14px;
  border-radius: 15px;
  ::placeholder {
    color: ${gray};
  }
  :focus{
    outline: none;
  }
`