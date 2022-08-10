import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";

type Props = {
  memoId: number;
  colorCode: string;
};

export const ColorThumb: FC<Props> = (props) => {
  const { memoId, colorCode } = props;

  return (
    <StyledMemoWrapper to={`/memo/${memoId}`}>
      <StyledMemo {...props}># {colorCode}</StyledMemo>
    </StyledMemoWrapper>
  );
};

const { black } = ColorTheme.palette;
const { regular } = Font.fontWeight;
const { Noto } = Font.fontFamily;

const StyledMemoWrapper = styled(Link)`
  display: inline-block;
  width: 165px;
`;
const StyledMemo = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${(props) => `#${props.colorCode}`};
  color: ${black};
  padding-left: 13px;
  font-family: ${Noto};
  font-size: 16px;
  font-weight: ${regular};
  border-bottom-right-radius: 13px;
  box-shadow: 0px 2px 3px 0px rgba(22, 22, 22, 0.15);
  box-sizing: border-box;
`;
