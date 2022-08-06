import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetMemos } from "../../hooks/memos/useGetMemos";
import { PageTitle } from "../molecules/PageTitle";
import { ColorMemoThumb } from "../atoms/ColorMemoThumb";
import { Center, Spinner } from "@chakra-ui/react";
import styled from "styled-components";

export const MemosFileLayout = () => {
  const location = useLocation();
  const [selectId, setSelectId] = useState<{ id: number }>(
    location.state as { id: number }
  );

  const { memosData, memosLoading, memosError } = useGetMemos(selectId.id);

  return (
    <ContentInner>
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
                colorCode={memo.colorCode}
                tagName={memo.tagName}
                deleteMode={true}
              ></ColorMemoThumb>
            ))}
        </MemosWrap>
      )}
    </ContentInner>
  );
};

const ContentInner = styled.div`
  margin: 95px auto 0;
`;

const MemosWrap = styled.div`
  max-width: 340px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;
