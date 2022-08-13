import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { memosDataType } from "../../hooks/memos/useGetMemos";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { SettingIcon } from "../atoms/Icon/SettingIcon";
import { PageTitle } from "../atoms/PageTitle";
import { ColorMemoThumb } from "../molecules/ColorMemoThumb";
import { Header } from "../organisms/Header";
import { MemosFileDrawer } from "../organisms/File/MemosFileDrawer";
import { Loading } from "../pages/Loading";
import styled from "styled-components";

type Props = {
  memosData: memosDataType;
};

export const MemosFileLayout: FC<Props> = (props) => {
  const { memosData } = props;
  const memosList = memosData.getData;
  const navigate = useNavigate();
  const { fileName } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDelete, setIsDelete] = useState(false);

  return (
    <>
      <Header />
      <ContentInner>
        <ArrowWrap>
          <ReturnArrow onClick={() => navigate("/")} color={"#161616"} />
        </ArrowWrap>
        <Head>
          <PageTitle>{fileName}</PageTitle>
          <SettingIcon onClick={onOpen} />
        </Head>
        {memosData.loading ? (
          <Loading />
        ) : (
          <>
            <MemosWrap>
              {memosList &&
                memosList.memos.map((memo, index) => (
                  <ColorMemoThumb
                    key={index}
                    memoId={memo.id}
                    content={{ ...memo, fileName: memosList.name }}
                    deleteMode={false}
                    canEdit={true}
                  />
                ))}
            </MemosWrap>
            <MemosFileDrawer
              fileName={memosData.getData.name}
              isDelete={isDelete}
              setIsDelete={setIsDelete}
              isOpen={isOpen}
              onClose={onClose}
            />
          </>
        )}
      </ContentInner>
    </>
  );
};

const ContentInner = styled.div`
  max-width: 340px;
  margin: 35px auto 0;
`;

const ArrowWrap = styled.div`
  margin-bottom: 25px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MemosWrap = styled.div`
  max-width: 340px;
  height: calc(100vh - 125px);
  overflow-y: scroll;
  margin: 15px auto 0;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
