import { useState } from "react";
import {
  Stack,
  Input,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { usePostMemos, MemoContent } from "../../hooks/memos/usePostMemo";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { FilesDrawer } from "../organisms/Memo/FilesDrawer";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import styled from "styled-components";
import { ColorSetting } from "../organisms/ColorSetting";

export const MemoCreateLayout = (memoContent: MemoContent) => {
  const { newMemo, setNewMemo } = usePostMemos(memoContent);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openedModal, setOpenedModal] = useState(false);

  const onChangeTag = (value: string) => {
    setNewMemo((prev) => ({ ...prev, tagName: value }));
  };

  const onChangeComment = (value: string) => {
    setNewMemo((prev) => ({ ...prev, comment: value }));
  };

  const onChangeURL = (value: string) => {
    setNewMemo((prev) => ({ ...prev, url: value }));
  };

  return (
    <Display>
      <Content>
        <Head>
          <ReturnArrow
            path={`/memo/${memoContent.id}`}
            state={memoContent}
            color={"#161616"}
          />
          <CompleteButton>完了</CompleteButton>
        </Head>
        <Color bg={newMemo.colorCode} onClick={() => setOpenedModal(true)}>
          <ColorEdit>色を編集</ColorEdit>
          <ColorCode># {newMemo.colorCode}</ColorCode>
        </Color>
        <Stack spacing={3} style={{ maxWidth: "340px", margin: "0 auto" }}>
          <FileSelect onClick={onOpen}>{newMemo.fileInfo.name}</FileSelect>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<span>#</span>} />
            <Input
              style={InputStyle}
              placeholder="#色名を入力"
              value={newMemo.tagName}
              onChange={(e) => onChangeTag(e.target.value)}
            />
          </InputGroup>
          <Textarea
            style={TextAreaStyle}
            placeholder="メモ"
            value={newMemo.comment}
            onChange={(e) => onChangeComment(e.target.value)}
          />
          <Input
            style={InputURLStyle}
            placeholder="URLを入力"
            value={newMemo.url}
            onChange={(e) => onChangeURL(e.target.value)}
          />
        </Stack>
      </Content>
      {openedModal && (
        <ColorSetting
          setOpenedModal={setOpenedModal}
          currentColor={`#${newMemo.colorCode}`}
          setNewMemo={setNewMemo}
        />
      )}
      <FilesDrawer isOpen={isOpen} onClose={onClose} setNewMemo={setNewMemo} />
    </Display>
  );
};

const { palette } = ColorTheme;
const { fontWeight, fontFamily } = Font;

const Display = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: white;
`;

const Content = styled.div``;

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
  color: ${palette.white};
  font-family: ${fontFamily.Noto};
  font-weight: ${fontWeight.bold};
  font-size: 24px;
`;

const ColorCode = styled.h2`
  color: ${palette.white};
  font-family: ${fontFamily.Roboto};
  font-weight: ${fontWeight.medium};
  font-size: 16px;
`;

const FileSelect = styled.button`
  width: 340px;
  height: 40px;
  padding-left: 13px;
  text-align: start;
  position: relative;
  border-radius: 5px;
  background-color: #f2f2f2;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    background-image: url("../../src/images/grayArrow.svg");
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const InputStyle = {
  fontFamily: fontFamily.Noto,
  fontSize: "16px",
  border: "none",
  background: "#F2F2F2",
  color: "#161616",
};

const TextAreaStyle = {
  height: "115px",
  fontFamily: fontFamily.Noto,
  fontSize: "16px",
  border: "none",
  background: "#F2F2F2",
  color: "#161616",
};

const InputURLStyle = {
  fontFamily: fontFamily.Roboto,
  fontSize: "16px",
  border: "none",
  background: "#F2F2F2",
  color: "#161616",
};
