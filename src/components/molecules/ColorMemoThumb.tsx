import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Memo } from "../../types/memo";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";

type Props = {
  content: Memo;
  isDelete: boolean;
};

export const ColorMemoThumb: FC<Props> = (props) => {
  const { content, isDelete } = props;
  const navigate = useNavigate();

  const onClickMemo = () => {
    navigate(`/memo/${content.id}`);
  };

  return (
    <>
      <MemoThumb isDelete={isDelete} onClick={() => !isDelete && onClickMemo()}>
        <ColorCodeBox {...props}>
          <WhiteBox>
            <h2>{content.tagName}</h2>
            <p>#{content.colorCode}</p>
          </WhiteBox>
        </ColorCodeBox>
      </MemoThumb>
    </>
  );
};

const { white, black } = ColorTheme.palette;
const { Roboto, Noto } = Font.fontFamily;
const { regular } = Font.fontWeight;

const MemoThumb = styled.div<{ isDelete: boolean }>`
  display: inline-block;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  width: 340px;
  height: 60px;
  border-bottom-right-radius: 13px;
  box-shadow: 0px 2px 3px 2px rgba(22, 22, 22, 0.15);
  transform: ${({ isDelete }) => isDelete && "translateX(14px)"};
`;

const ColorCodeBox = styled.div<Props>`
  width: 340px;
  height: 60px;
  background-color: ${(props) => `#${props.content.colorCode}`};
`;

const WhiteBox = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 280px;
  height: 55px;
  padding: 7px 13px 8px;
  background-color: ${white};
  box-sizing: border-box;
  font-weight: ${regular};
  h2 {
    line-height: 1.43;
    color: ${black};
    font-size: 16px;
    font-family: ${Noto};
  }
  p {
    line-height: 1.15;
    color: #9b9b9b;
    font-size: 13px;
    font-family: ${Roboto};
  }
`;
