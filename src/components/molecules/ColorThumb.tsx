import { FC } from "react";
import { Link } from "react-router-dom";
import { useHexToRgb } from "../../hooks/color/useHexToRgb";
import { MemoType } from "../../hooks/memos/useSearchMemos";
import styled from "styled-components";

type Props = {
  memoId: number;
  content: MemoType;
  canEdit: boolean;
};

export const ColorThumb: FC<Props> = (props) => {
  const { memoId, content, canEdit } = props;
  const { setHextoRGB } = useHexToRgb();
  const rgb = setHextoRGB(content.colorCode);

  const brightness = Math.floor(
    rgb.red * 0.299 + rgb.green * 0.587 + rgb.blue * 0.114
  );
  const textColor = brightness >= 140 ? "#161616" : "#FFFFFF";

  return (
    <StyledMemoWrapper
      to={`/memo/${memoId}`}
      state={{ state: content, editMode: canEdit }}
    >
      <StyledMemo bg={content.colorCode} text={textColor}>
        # {content.colorCode}
      </StyledMemo>
    </StyledMemoWrapper>
  );
};

const StyledMemoWrapper = styled(Link)`
  display: inline-block;
  width: 165px;
`;

const StyledMemo = styled.div<{ bg: string; text: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${(props) => `#${props.bg}`};
  color: ${(props) => props.text};
  padding-left: 13px;
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  border-bottom-right-radius: 13px;
  box-shadow: 0px 2px 3px 2px rgba(22, 22, 22, 0.15);
  box-sizing: border-box;
`;
