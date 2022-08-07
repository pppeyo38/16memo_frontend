import { useState } from "react";
import { Stack, Input, useDisclosure } from "@chakra-ui/react";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { FilesDrawer } from "../organisms/Memo/FilesDrawer";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import styled from "styled-components";

type FileInfo = {
  id: number;
  name: string;
};

type MemoContent = {
  id: number;
  colorCode: string;
  tagName: string;
  comment: string;
  url: string;
  createdAt: string;
  fileInfo: FileInfo;
};

type NewMemo = {
  id: number;
  colorCode: string;
  tagName: string;
  comment: string;
  url: string;
  createdAt: string;
  fileInfo: FileInfo;
};

export const MemoCreateLayout = (memoContent: MemoContent) => {
  const [newMemo, setNewMemo] = useState<NewMemo>(memoContent);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Color bg={memoContent.colorCode}>
          <ColorCode># {memoContent.colorCode}</ColorCode>
        </Color>
        <Stack spacing={3} style={{ maxWidth: "340px", margin: "0 auto" }}>
          <FileSelect onClick={onOpen}>{newMemo.fileInfo.name}</FileSelect>
          <Input variant="filled" color="#9B9B9B" />
          <Input variant="filled" color="#9B9B9B" />
          <Input variant="filled" color="#9B9B9B" />
        </Stack>
      </Content>
      <FilesDrawer
        isOpen={isOpen}
        onClose={onClose}
        newMemo={newMemo}
        setNewMemo={setNewMemo}
      />
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
  margin: 25px 0;
  width: 100vw;
  height: 170px;
  background-color: ${({ bg }) => `#${bg}`};
`;

const ColorCode = styled.h1`
  color: ${palette.white};
  font-family: ${fontFamily.Roboto};
  font-weight: ${fontWeight.medium};
  font-size: 24px;
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
