import { FC, useState } from "react";
import { filesDataType } from "../../hooks/files/useGetFiles";
import { CheckboxGroup, useDisclosure } from "@chakra-ui/react";
import { SettingIcon } from "../atoms/Icon/SettingIcon";
import { CheckBox } from "../atoms/CheckBox";
import { CancelButton } from "../atoms/Button/CancelButton";
import { DeleteButton } from "../atoms/Button/DeleteButton";
import { FileThumb } from "../atoms/FileThumb";
import { PageTitle } from "../molecules/PageTitle";
import { FileOperateDrawer } from "../organisms/File/FileOperateDrawer";
import { Loading } from "../pages/Loading";
import styled from "styled-components";

type Props = {
  filesData: filesDataType;
};

export const FilesLayout: FC<Props> = (props) => {
  const { filesData } = props;
  const filesList = filesData.getData;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDelete, setIsDelete] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const onClickCancelButton = () => {
    setIsDelete(!isDelete);
    setCheckedItems([]);
  };

  return (
    <ContentInner>
      <Head>
        {isDelete ? (
          <>
            <CancelButton onClick={() => onClickCancelButton()} />
            {checkedItems.length !== 0 && (
              <DeleteButton
                onClick={() => console.log("削除: " + checkedItems)}
              />
            )}
          </>
        ) : (
          <>
            <PageTitle>ファイル</PageTitle>
            <SettingIcon onClick={onOpen} />
          </>
        )}
      </Head>
      {filesData.loading ? (
        <Loading />
      ) : (
        <FilesWrap>
          <CheckboxGroup value={checkedItems}>
            {filesList &&
              filesList.map((file, index) => (
                <ThumbContiner key={index}>
                  {isDelete && (
                    <CheckBox
                      checkedItems={checkedItems}
                      setCheckedItems={setCheckedItems}
                      id={String(file.id)}
                    />
                  )}
                  <FileThumb
                    fileId={file.id}
                    name={file.name}
                    colorNum={file.memo.colorNum}
                    mainColors={file.memo.mainColor}
                    isDelete={isDelete}
                  />
                </ThumbContiner>
              ))}
          </CheckboxGroup>
        </FilesWrap>
      )}
      <FileOperateDrawer
        isDelete={isDelete}
        setIsDelete={setIsDelete}
        isOpen={isOpen}
        onClose={onClose}
      />
    </ContentInner>
  );
};

const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 95px;
`;

const Head = styled.div`
  width: 340px;
  height: 35px;
  display: flex;
  justify-content: space-between;
`;

const FilesWrap = styled.div`
  height: calc(100vh - 145px);
  margin-top: 15px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  overflow-y: scroll;
`;

const ThumbContiner = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
