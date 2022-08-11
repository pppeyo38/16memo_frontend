import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetMemos } from "../../hooks/memos/useGetMemos";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { PageTitle } from "../molecules/PageTitle";
import { ColorMemoThumb } from "../atoms/ColorMemoThumb";
import { Center, Spinner } from "@chakra-ui/react";
import styled from "styled-components";

export const MemosFileLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useState<{ id: number }>(
    location.state as { id: number }
  );

  const { memosData, memosLoading, memosError } = useGetMemos(selectValue.id);

  return (
    <ContentInner>
      <ArrowWrap>
        <ReturnArrow onClick={() => navigate("/")} color={"#161616"} />
      </ArrowWrap>
      <PageTitle>{memosData.name}</PageTitle>
      {memosLoading ? (
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
        <MemosWrap>
          {memosData &&
            memosData.memos.map((memo, index) => (
              <ColorMemoThumb
                key={index}
                memoId={memo.id}
                content={{
                  ...memo,
                  fileInfo: { id: memosData.id, name: memosData.name },
                }}
                deleteMode={false}
                canEdit={true}
              />
            ))}
        </MemosWrap>
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
