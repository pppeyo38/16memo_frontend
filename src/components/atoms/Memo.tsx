import { FC } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";

type Props = {
  text: string;
  bgColor: string; 
  link: string;
}

export const Memo: FC<Props> = (props) => {
  const { text, bgColor, link } = props;
  const { white, black } = ColorTheme.palette;
  const { regular } = Font.fontWeight;

  //bgColorとcolor変える(背景色によって見えやすさ変わるから、、)
  const StyledMemo = styled(Link)`
    display: flex;
    align-items: center;
    width: 165px;
    height: 60px;
    background-color: ${bgColor};
    color: ${black};
    padding-left: 13px;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 16px;
    font-weight: ${regular};
    border-bottom-right-radius: 13px;
    text-decoration: none;
  `
  return(
    <StyledMemo to={link}>{text}</StyledMemo>
  )
}