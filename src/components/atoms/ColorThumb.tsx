import { FC } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import { Memo } from "../../types/model";

type Props = {
  // memo: Memo[]; // Memo[]
  colorCode: string;
  link: string;
}

export const ColorThumb: FC<Props> = (props) => {
  const { colorCode, link } = props;

  return(
    <Link to={link}>
      {/* <StyledMemo colorCode={colorCode} link={link}>{colorCode}</StyledMemo> */}
      <StyledMemo {...props}>{colorCode}</StyledMemo>
    </Link>
  )
}


const { white, black } = ColorTheme.palette;
const { regular } = Font.fontWeight;
//bgColorとcolor変える(背景色によって見えやすさ変わるから、、)
const StyledMemo = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 165px;
  height: 60px;
  background-color: ${(props) => `#${props.colorCode}`};
  color: ${black};
  padding-left: 13px;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  font-weight: ${regular};
  border-bottom-right-radius: 13px;
`