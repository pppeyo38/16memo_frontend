import { Dispatch, FC, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Memo } from "../../types/memo";
import { usePostMemos } from "../../hooks/memos/usePostMemo";
import { usePutMemo } from "../../hooks/memos/usePutMemo";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { ColorSetting } from "../organisms/ColorSetting";
import { MemoForm } from "../organisms/Memo/MemoForm";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import styled from "styled-components";

type Props = {
  memoData: Memo;
  isNew: boolean;
};

export const MemoCreateLayout: FC<Props> = (props) => {
  const { memoData, isNew } = props;
  const [newMemo, setNewMemo] = useState<Memo>(memoData);
  const { SendPostMemo } = usePostMemos();
  const { SendPutMemo } = usePutMemo();
  const [openedModal, setOpenedModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Content>
        <Head>
          <ReturnArrow onClick={() => navigate(-1)} color={"#161616"} />
          <CompleteButton
            onClick={
              isNew
                ? () => SendPostMemo(newMemo)
                : () => SendPutMemo(newMemo, newMemo.id!)
            }
          >
            完了
          </CompleteButton>
        </Head>
        <Color bg={newMemo.colorCode} onClick={() => setOpenedModal(true)}>
          <ColorEdit>色を編集</ColorEdit>
          <ColorCode># {newMemo.colorCode}</ColorCode>
        </Color>
        <MemoForm newMemo={newMemo} setNewMemo={setNewMemo} />
      </Content>
      {openedModal && (
        <ColorSetting
          setOpenedModal={setOpenedModal}
          currentColor={`#${newMemo.colorCode}`}
          setNewMemo={setNewMemo}
        />
      )}
    </>
  );
};

const { palette } = ColorTheme;
const { fontWeight, fontFamily } = Font;

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: white;
`;

const Head = styled.div`
  max-width: 335px;
  margin: 35px auto 0;
  display: flex;
  justify-content: space-between;
`;

const CompleteButton = styled.button`
  color: ${palette.black};
  font-family: ${fontFamily.Noto};
  font-size: 16px;
`;

const Color = styled.div<{ bg: string }>`
  display: grid;
  place-content: center;
  text-align: center;
  margin: 25px 0;
  width: 100vw;
  height: 170px;
  background-color: ${({ bg }) => `#${bg}`};
`;

const ColorEdit = styled.h1`
  line-height: 1.45;
  color: ${palette.white};
  font-family: ${fontFamily.Noto};
  font-weight: ${fontWeight.bold};
  font-size: 24px;
`;

const ColorCode = styled.h2`
  line-height: 1.18;
  color: ${palette.white};
  font-family: ${fontFamily.Roboto};
  font-weight: ${fontWeight.medium};
  font-size: 16px;
`;
