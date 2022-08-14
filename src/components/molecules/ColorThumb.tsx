import { FC } from "react";
import { Link } from "react-router-dom";
import { MemoType } from "../../hooks/memos/useSearchMemos";
import styled from "styled-components";

type Props = {
  memoId: number;
  content: MemoType;
  canEdit: boolean;
};

export const ColorThumb: FC<Props> = (props) => {
  const { memoId, content, canEdit } = props;

  return (
    <StyledMemoWrapper
      to={`/memo/${memoId}`}
      state={{ state: content, editMode: canEdit }}
    >
      <StyledMemo bg={content.colorCode}># {content.colorCode}</StyledMemo>
    </StyledMemoWrapper>
  );
};

const StyledMemoWrapper = styled(Link)`
  display: inline-block;
  width: 165px;
`;
const StyledMemo = styled.div<{ bg: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${(props) => `#${props.bg}`};
  color: ${(props) => props.theme.colors.black};
  padding-left: 13px;
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  border-bottom-right-radius: 13px;
  box-shadow: 0px 2px 3px 2px rgba(22, 22, 22, 0.15);
  box-sizing: border-box;
`;
