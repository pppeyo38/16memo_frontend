import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CheckboxGroup, useDisclosure } from "@chakra-ui/react";
import { memosDataType } from "../../hooks/memos/useGetMemos";
import { useDestroyMemo } from "../../hooks/memos/useDestroyMemo";
import { useTrash } from "../../hooks/popup/useTrash";
import { CancelButton } from "../atoms/Button/CancelButton";
import { DeleteButton } from "../atoms/Button/DeleteButton";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { SettingIcon } from "../atoms/Icon/SettingIcon";
import { CheckBox } from "../atoms/CheckBox";
import { PageTitle } from "../atoms/PageTitle";
import { ColorMemoThumb } from "../molecules/ColorMemoThumb";
import { MemosFileDrawer } from "../organisms/File/MemosFileDrawer";
import { TrashPopup } from "../organisms/Memo/TrashPopup";
import { Loading } from "../pages/Loading";
import styled from "styled-components";

type Props = {
  memosData: memosDataType;
};

export const MemosFileLayout: FC<Props> = (props) => {
  const { memosData } = props;
  const memosList = memosData.getData;
  const { DestroyMemo } = useDestroyMemo();
  const { isOpenTrash, onOpenTrash, onCloseTrash } = useTrash();
  const navigate = useNavigate();
  const { fileName } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDelete, setIsDelete] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const onClickCancelButton = () => {
    setIsDelete(!isDelete);
    setCheckedItems([]);
  };

  const onClickDelete = () => {
    setIsDelete(false);
    onCloseTrash();
    DestroyMemo(checkedItems, fileName!);
  };

  return (
    <>
      <ContentInner>
        <ArrowWrap>
          {!isDelete && (
            <ReturnArrow onClick={() => navigate("/")} color={"#161616"} />
          )}
        </ArrowWrap>
        <Head>
          {isDelete ? (
            <>
              <CancelButton onClick={() => onClickCancelButton()} />
              {checkedItems.length !== 0 && (
                <DeleteButton onClick={() => onOpenTrash()} />
              )}
            </>
          ) : (
            <>
              <PageTitle>{fileName}</PageTitle>
              <SettingIcon onClick={onOpen} />
            </>
          )}
        </Head>
        {memosData.loading ? (
          <Loading />
        ) : (
          <>
            <MemosWrap>
              <CheckboxGroup>
                {memosList &&
                  memosList.memos.map((memo, index) => (
                    <ThumbContiner key={index}>
                      {isDelete && (
                        <CheckBox
                          checkedItems={checkedItems}
                          setCheckedItems={setCheckedItems}
                          id={String(memo.id)}
                        />
                      )}
                      <ColorMemoThumb
                        content={{ ...memo, fileName: memosList.name }}
                        isDelete={isDelete}
                      />
                    </ThumbContiner>
                  ))}
              </CheckboxGroup>
            </MemosWrap>
            <MemosFileDrawer
              fileName={memosData.getData.name}
              isDelete={isDelete}
              setIsDelete={setIsDelete}
              isOpen={isOpen}
              onClose={onClose}
            />
            <TrashPopup
              isOpenTrash={isOpenTrash}
              onClose={onCloseTrash}
              onClick={() => onClickDelete()}
            >
              メモを削除しますか？
            </TrashPopup>
          </>
        )}
      </ContentInner>
    </>
  );
};

const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
`;

const Head = styled.div`
  width: 340px;
  height: 35px;
  display: flex;
  justify-content: space-between;
`;

const ArrowWrap = styled.div`
  width: 340px;
  height: 35px;
  margin-bottom: 25px;
`;

const MemosWrap = styled.div`
  width: 400px;
  height: calc(100vh - 145px);
  margin-top: 15px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  overflow-y: scroll;
`;

const ThumbContiner = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
