import { Center, Spinner } from "@chakra-ui/react";
import { PageTitle } from "../molecules/PageTitle";
import { FileThumb } from "../atoms/FileThumb";
import styled from "styled-components";
import { FileWithMemoInfoType } from "../../api/handler/file/type";

type Props = {
  state: {
    filesData: FileWithMemoInfoType[];
    filesLoading: boolean;
    filesError?: Error;
  };
};

export const FilesLayout = ({ state }: Props) => {
  const { filesData, filesError, filesLoading } = state;

  return (
    <ContentInner>
      <PageTitle>ファイル</PageTitle>
      {filesLoading ? (
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
        <FilesWrap>
          {filesData &&
            filesData.map((file, index) => (
              <FileThumb
                key={index}
                fileId={file.id}
                name={file.name}
                colorNum={file.memo.colorNum}
                mainColors={file.memo.mainColor}
              ></FileThumb>
            ))}
        </FilesWrap>
      )}
    </ContentInner>
  );
};

const ContentInner = styled.div`
  max-width: 340px;
  margin: 95px auto 0;
`;

const FilesWrap = styled.div`
  max-width: 340px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;
