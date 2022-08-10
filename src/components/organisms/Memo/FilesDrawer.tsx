import { Dispatch, FC, SetStateAction, useState } from "react";
import { PostMemo } from "../../../hooks/memos/usePostMemo";
import { useFilesList } from "../../../hooks/memos/useFilesList";
import { DrawerWrap } from "../../molecules/DrawerWrap";
import styled from "styled-components";
import { ColorTheme } from "../../../style/ColorTheme";
import { Font } from "../../../style/Font";
import { ReturnArrow } from "../../atoms/Icon/ReturnArrow";
import { Input } from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  setNewMemo: Dispatch<SetStateAction<PostMemo>>;
};

export const FilesDrawer: FC<Props> = (props) => {
  const { isOpen, onClose, setNewMemo } = props;
  const { filesList, filesLoading, filesError } = useFilesList();
  const [createState, setCreateState] = useState(false);
  const [newFileName, setNewFileName] = useState<string>("");

  const ChooseFile = (name: string) => {
    setNewMemo((prev) => ({
      ...prev,
      fileName: name,
    }));
    setCreateState(false);
    onClose();
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFileName(e.target.value);
  };

  return (
    <DrawerWrap isOpen={isOpen} onClose={onClose}>
      <DrawerContent>
        {createState ? (
          <>
            <FormHead>
              <ReturnArrow
                onClick={() => setCreateState(false)}
                color={"#161616"}
              />
            </FormHead>
            <Form>
              <Input
                variant="filled"
                placeholder="ファイル名を入力"
                bg={"white"}
                value={newFileName}
                onChange={onChangeName}
              />
              <CompleteButton onClick={() => ChooseFile(newFileName)}>
                作成する
              </CompleteButton>
            </Form>
          </>
        ) : (
          <>
            <Head>
              <HeadInner>
                <CloseButton onClick={onClose}>
                  <span />
                  <span />
                </CloseButton>
                <Heading>ファイルを選択</Heading>
              </HeadInner>
            </Head>
            <FlowList>
              <FilesList>
                {filesList.map((file) => (
                  <ListItem onClick={() => ChooseFile(file.name)} key={file.id}>
                    {file.name}
                  </ListItem>
                ))}
              </FilesList>
            </FlowList>
            <CreateFileButton onClick={() => setCreateState(true)}>
              新規ファイル
            </CreateFileButton>
          </>
        )}
      </DrawerContent>
    </DrawerWrap>
  );
};

const { palette } = ColorTheme;
const { fontWeight, fontFamily } = Font;

const DrawerContent = styled.div`
  height: 98vh;
  position: relative;
  padding: 25px 25px 100px;
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

const FlowList = styled.div`
  height: 85vh;
  overflow-y: scroll;
`;

const FilesList = styled.ul`
  margin-bottom: 90px;
`;

const ListItem = styled.li`
  padding: 8px 13px 9px;
  border-bottom: 1px solid ${palette.gray};
  color: ${palette.black};
  line-height: 1.43;
  font-family: ${fontFamily.Noto};
  font-weight: ${fontWeight.regular};
`;

const CreateFileButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 170px;
  height: 50px;
  font-size: 16px;
  font-family: ${fontFamily.Noto};
  color: ${palette.white};
  border-radius: 100px;
  background: ${palette.blueGreen};
`;

const FormHead = styled.div``;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 180px;
  gap: 48px;
`;

const CompleteButton = styled.button`
  width: 170px;
  height: 50px;
  font-size: 16px;
  font-family: ${fontFamily.Noto};
  color: ${palette.white};
  border-radius: 100px;
  background: ${palette.blueGreen};
`;
