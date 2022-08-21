import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { use100vh } from "react-div-100vh";
import { Memo } from "../../types/memo";
import { usePostMemos } from "../../hooks/memos/usePostMemo";
import { usePutMemo } from "../../hooks/memos/usePutMemo";
import { useHexToRgb } from "../../hooks/color/useHexToRgb";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { ColorSetting } from "../organisms/ColorSetting";
import { MemoForm } from "../organisms/Memo/MemoForm";
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
  const height = use100vh();

  const [fileError, setFileError] = useState<boolean>(false);
  const [tagError, setTagError] = useState<boolean>(false);

  const { setHextoRGB } = useHexToRgb();
  const rgb = setHextoRGB(newMemo.colorCode);
  const brightness = Math.floor(
    rgb.red * 0.299 + rgb.green * 0.587 + rgb.blue * 0.114
  );
  const textColor = brightness >= 140 ? "#161616" : "#FFFFFF";
  const subTextColor =
    brightness >= 140 ? "rgba(64, 63, 63, 0.5)" : "rgba(214, 214, 214, 0.5)";

  const onCheckBlank = () => {
    newMemo.tagName.length === 0 && setTagError(true);
    newMemo.fileName.length === 0 && setFileError(true);
    return newMemo.tagName.length === 0 || newMemo.fileName.length === 0;
  };

  const onClickComplete = (isNew: boolean, newMemo: Memo) => {
    const flag = onCheckBlank();
    if (!flag) {
      isNew ? SendPostMemo(newMemo) : SendPutMemo(newMemo, newMemo.id!);
    } else {
      console.log("--- 入力エラー ---");
    }
  };

  return (
    <>
      <Content h={height ? `${height}px` : "100vh"}>
        <Head>
          <ReturnArrow onClick={() => navigate(-1)} color={"#161616"} />
          <CompleteButton onClick={() => onClickComplete(isNew, newMemo)}>
            完了
          </CompleteButton>
        </Head>
        <Color bg={newMemo.colorCode} onClick={() => setOpenedModal(true)}>
          <ColorEdit textColor={textColor}>色を編集</ColorEdit>
          <ColorCode textColor={subTextColor}>
            #{newMemo.colorCode.toUpperCase()}
          </ColorCode>
        </Color>
        <MemoForm
          newMemo={newMemo}
          setNewMemo={setNewMemo}
          fileError={fileError}
          setFileError={setFileError}
          tagError={tagError}
          setTagError={setTagError}
        />
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

const Content = styled.div<{ h: string }>`
  width: 100%;
  height: ${(props) => props.h};
  overflow: hidden;
  background: white;

  ${({ theme }) => theme.media.desktop`
    width: 600px;
    height: 100vh;
  `}
`;

const Head = styled.div`
  max-width: 335px;
  margin: 35px auto 0;
  display: flex;
  justify-content: space-between;
`;

const CompleteButton = styled.button`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fontFamily.Noto};
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

  ${({ theme }) => theme.media.desktop`
    width: 340px;
    margin: 25px auto;
  `}
`;

const ColorEdit = styled.h1<{ textColor: string }>`
  line-height: 1.45;
  margin-bottom: 2px;
  color: ${(props) => props.textColor};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: 24px;
`;

const ColorCode = styled.h2<{ textColor: string }>`
  line-height: 1.18;
  color: ${(props) => props.textColor};
  font-family: ${(props) => props.theme.fontFamily.Roboto};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: 16px;
`;
