import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { EditButton } from "../atoms/EditButton";
import { CommentIcon } from "../atoms/Icon/CommentIcon";
import { LinkIcon } from "../atoms/Icon/LinkIcon";
import { TrashIcon } from "../atoms/Icon/TrashIcon";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import styled from "styled-components";
import { CommentDrawer } from "../organisms/Memo/CommentDrawer";
import { LinkPopup } from "../organisms/Memo/LinkPopup";
import { TrashPopup } from "../organisms/Memo/TrashPopup";

type FileInfo = {
  id: number;
  name: string;
};

type MemoContent = {
  id: number;
  colorCode: string;
  tagName: string;
  comment: string;
  url: string;
  createdAt: string;
  fileInfo: FileInfo;
};

export const MemoLayout = (memoContent: MemoContent) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenLink, setIsOpenLink] = useState<boolean>(false);
  const [isOpenTrash, setIsOpenTrash] = useState<boolean>(false);

  const onCloseLink = () => setIsOpenLink(false);
  const onCloseTrash = () => setIsOpenTrash(false);

  return (
    <Display bg={memoContent.colorCode}>
      <Content>
        <Head>
          <ReturnArrow
            path={`/${memoContent.fileInfo.name}`}
            id={memoContent.fileInfo.id}
            color={"white"}
          />
          <EditButton />
        </Head>
        <Main>
          <MemoInfo>
            <MemoHeadingWrap>
              <MemoHeading>{memoContent.tagName}</MemoHeading>
              <ColorCode># {memoContent.colorCode}</ColorCode>
            </MemoHeadingWrap>
          </MemoInfo>
          <CodeList>
            <CodeListItem>
              <p>RGB</p>
              255 255 255
            </CodeListItem>
            <CodeListItem>
              <p>CMYK</p>0 0 0 0
            </CodeListItem>
            <CodeListItem>
              <p>HSV/HSB</p>0 0 0
            </CodeListItem>
          </CodeList>
          <ActionIcons>
            <button onClick={onOpen}>
              <CommentIcon color={"white"} />
            </button>
            <button onClick={() => setIsOpenLink(true)}>
              <LinkIcon color={"white"} />
            </button>
            <div onClick={() => setIsOpenTrash(true)}>
              <TrashIcon color={"white"} />
            </div>
          </ActionIcons>
        </Main>
      </Content>
      <CommentDrawer isOpen={isOpen} onClose={onClose}>
        {memoContent.comment}
      </CommentDrawer>
      <LinkPopup
        url={memoContent.url}
        isOpenLink={isOpenLink}
        onClose={onCloseLink}
      />
      <TrashPopup isOpenTrash={isOpenTrash} onClose={onCloseTrash} />
    </Display>
  );
};

const { palette } = ColorTheme;
const { fontWeight, fontFamily } = Font;

const Display = styled.div<{ bg: string }>`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${(props) => `#${props.bg}`};
`;

const Content = styled.div`
  max-width: 335px;
  margin: 0 auto;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
`;

const Main = styled.div`
  margin-top: 173px;
`;

const MemoInfo = styled.div``;

const MemoHeadingWrap = styled.div`
  * + * {
    margin-top: 13px;
  }
`;

const MemoHeading = styled.h1`
  color: ${palette.white};
  font-family: ${fontFamily.Noto};
  font-size: 24px;
  font-weight: ${fontWeight.bold};
`;

const ColorCode = styled.h1`
  color: ${palette.white};
  font-family: ${fontFamily.Roboto};
  font-size: 24px;
  font-weight: ${fontWeight.bold};
`;

const CodeList = styled.ul`
  margin-top: 26px;
  color: ${palette.white};
  font-size: 15px;
  font-family: ${fontFamily.Roboto};
`;

const CodeListItem = styled.li`
  display: flex;
  gap: 15px;

  & p {
    width: 65px;
  }
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
`;
