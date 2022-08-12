import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { PageTitle } from "../molecules/PageTitle";
import { ColorMemoThumb } from "../atoms/ColorMemoThumb";
import { Center, Spinner } from "@chakra-ui/react";
import styled from "styled-components";
import { memosDataType } from "../../hooks/memos/useGetMemos";

type Props = {
  memosData: memosDataType;
};

export const MemosFileLayout: FC<Props> = (props) => {
  const { memosData } = props;
  const memosList = memosData.getData;
  const navigate = useNavigate();

  return (
    <ContentInner>
      <ArrowWrap>
        <ReturnArrow onClick={() => navigate("/")} color={"#161616"} />
      </ArrowWrap>
      {memosData.loading ? (
        <Center h="50vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#00A8A6"
            size="xl"
          />
        </Center>
      ) : (
        <>
          <PageTitle>{memosList.name}</PageTitle>
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
        </>
      )}
    </ContentInner>
  );
};

const ContentInner = styled.div`
  max-width: 340px;
  margin: 35px auto 0;
`;

const ArrowWrap = styled.div`
  margin-bottom: 25px;
`;

const MemosWrap = styled.div`
  max-width: 340px;
  height: calc(100vh - 125px);
  overflow-y: scroll;
  margin: 15px auto 0;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
`;
