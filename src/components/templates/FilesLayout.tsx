import { FC } from "react";
import { filesDataType } from "../../hooks/files/useGetFiles";
import { Center, Spinner } from "@chakra-ui/react";
import { SettingIcon } from "../atoms/Icon/SettingIcon";
import { FileThumb } from "../atoms/FileThumb";
import { PageTitle } from "../molecules/PageTitle";
import styled from "styled-components";

type Props = {
  filesData: filesDataType;
};

export const FilesLayout: FC<Props> = (props) => {
  const { filesData } = props;
  const filesList = filesData.getData;

  return (
    <ContentInner>
      <Head>
        <PageTitle>ファイル</PageTitle>
        <SettingIcon onClick={() => console.log("メニュー")} />
      </Head>
      {filesData.loading ? (
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
          {filesList &&
            filesList.map((file, index) => (
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

const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilesWrap = styled.div`
  max-width: 340px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;
