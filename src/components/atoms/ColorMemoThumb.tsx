import { FC } from "react";
import { Link } from "react-router-dom";
import { Memo } from "../../types/memo";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";

type Props = {
  memoId: number | undefined;
  content: Memo;
  deleteMode: boolean;
  canEdit: boolean;
};

export const ColorMemoThumb: FC<Props> = (props) => {
  const { memoId, content, deleteMode, canEdit } = props;
  return (
    <>
      {deleteMode ? (
        <NoLinkWrapper>
          <ColorCodeBox {...props}>
            <WhiteBox>
              <h2>{content.tagName}</h2>
              <p>#{content.colorCode}</p>
            </WhiteBox>
          </ColorCodeBox>
        </NoLinkWrapper>
      ) : (
        <LinkWrapper
          to={`/memo/${memoId}`}
          state={{ state: content, editMode: canEdit }}
        >
          <ColorCodeBox {...props}>
            <WhiteBox>
              <h2>{content.tagName}</h2>
              <p>#{content.colorCode}</p>
            </WhiteBox>
          </ColorCodeBox>
        </LinkWrapper>
      )}
    </>
  );
};

const { white, black } = ColorTheme.palette;
const { Roboto, Noto } = Font.fontFamily;
const { regular } = Font.fontWeight;

const LinkWrapper = styled(Link)`
  display: inline-block;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  width: 340px;
  height: 60px;
  margin-bottom: 13px;
  border-bottom-right-radius: 13px;
  box-shadow: 0px 2px 3px 2px rgba(22, 22, 22, 0.15);
`;

const NoLinkWrapper = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 60px;
  border-bottom-right-radius: 13px;
  box-shadow: 0px 2px 3px 2px rgba(22, 22, 22, 0.15);
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
