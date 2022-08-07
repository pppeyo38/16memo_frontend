import { Dispatch, FC, SetStateAction } from "react";
import { useFilesList } from "../../../hooks/memos/useFilesList";
import { DrawerWrap } from "../../molecules/DrawerWrap";
import styled from "styled-components";
import { ColorTheme } from "../../../style/ColorTheme";
import { Font } from "../../../style/Font";

type FilesData = {
  id: number;
  name: string;
};

type NewMemo = {
  id: number;
  colorCode: string;
  tagName: string;
  comment: string;
  url: string;
  createdAt: string;
  fileInfo: FilesData;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  newMemo: NewMemo;
  setNewMemo: Dispatch<SetStateAction<NewMemo>>;
};

export const FilesDrawer: FC<Props> = (props) => {
  const { isOpen, onClose, newMemo, setNewMemo } = props;
  const { filesList, filesLoading, filesError } = useFilesList();

  const ChooseFile = (id: number, name: string) => {
    setNewMemo((prev) => ({
      ...prev,
      fileInfo: { ...prev.fileInfo, id: id, name: name },
    }));
    onClose();
  };

  return (
    <DrawerWrap isOpen={isOpen} onClose={onClose}>
      <DrawerContent>
        <Head>
          <HeadInner>
            <CloseButton onClick={onClose}>
              <span />
              <span />
            </CloseButton>
            <Heading>ファイルを選択</Heading>
          </HeadInner>
        </Head>
        <FilesList>
          {filesList.map((file) => (
            <ListItem
              onClick={() => ChooseFile(file.id, file.name)}
              key={file.id}
            >
              {file.name}
            </ListItem>
          ))}
        </FilesList>
      </DrawerContent>
    </DrawerWrap>
  );
};

const { palette } = ColorTheme;
const { fontWeight, fontFamily } = Font;

const DrawerContent = styled.div`
  position: relative;
  padding: 25px 25px 40px;
`;

const Head = styled.div`
  padding-bottom: 25px;
  border-bottom: 1px solid ${palette.gray};
`;

const HeadInner = styled.div`
  height: 35px;
  display: grid;
  place-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  left: 25px;
  width: 35px;
  height: 35px;

  span {
    display: block;
    width: 26px;
    height: 1px;
    border-radius: 50%;
    background-color: #161616;

    &:nth-child(1) {
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;

const Heading = styled.h2`
  color: ${palette.black};
  font-family: ${fontFamily.Noto};
  font-weight: ${fontWeight.medium};
`;

const FilesList = styled.ul``;

const ListItem = styled.li`
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid ${palette.gray};
  color: ${palette.black};
  font-family: ${fontFamily.Noto};
  font-weight: ${fontWeight.regular};
`;
