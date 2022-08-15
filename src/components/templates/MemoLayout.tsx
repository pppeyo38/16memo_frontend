import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDestroyMemo } from "../../hooks/memos/useDestroyMemo";
import { memoDataType } from "../../hooks/memos/useShowMemo";
import { useTrash } from "../../hooks/popup/useTrash";
import { useHexToRgb } from "../../hooks/color/useHexToRgb";
import { useCmykToRgb } from "../../hooks/color/useCmykToRgb";
import { useHsvToRgb } from "../../hooks/color/useHsvToRgb";

import { useDisclosure } from "@chakra-ui/react";
import styled from "styled-components";

import { EditButton } from "../atoms/Button/EditButton";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { CommentIcon } from "../atoms/Icon/CommentIcon";
import { LinkIcon } from "../atoms/Icon/LinkIcon";
import { TrashIcon } from "../atoms/Icon/TrashIcon";
import { CommentDrawer } from "../organisms/Memo/CommentDrawer";
import { LinkPopup } from "../organisms/Memo/LinkPopup";
import { TrashPopup } from "../organisms/Memo/TrashPopup";
import { useAuth } from "../../hooks/account/useAuth";

type Props = {
  memoData: memoDataType;
};

export const MemoLayout: FC<Props> = (props) => {
  const { currentUser } = useAuth();
  const { memoData } = props;
  const memoContent = memoData.getData.memo;
  const [canEdit, setCanEdit] = useState(
    true
    // TODO: 編集権限
    // currentUser?.uid === memoData.getData.userId
  );
  const { DestroyMemo } = useDestroyMemo();

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpenTrash, onOpenTrash, onCloseTrash } = useTrash();
  const [isOpenLink, setIsOpenLink] = useState<boolean>(false);

  const { setHextoRGB } = useHexToRgb();
  const { setRGBtoCMYK } = useCmykToRgb();
  const { setRGBtoHSV } = useHsvToRgb();
  const rgb = setHextoRGB(memoContent.colorCode);
  const cmyk = setRGBtoCMYK(rgb);
  const hsv = setRGBtoHSV(rgb);

  const backMemosFile = () => {
    if (memoData.getData.userId) {
      navigate(`/${memoContent.fileName}`);
    } else {
      navigate("/");
    }
  };

  const handleClick = () => {
    navigate(`/memo/${memoContent.id}/edit`);
  };

  const onCloseLink = () => setIsOpenLink(false);

  return (
    <Display bg={memoContent.colorCode}>
      <Content>
        <Head>
          <ReturnArrow onClick={() => backMemosFile()} color={"white"} />
          {canEdit && <EditButton onClick={handleClick} />}
        </Head>
        <Main>
          <MemoInfo>
            <MemoHeadingWrap>
              <MemoHeading># {memoContent.tagName}</MemoHeading>
              <ColorCode># {memoContent.colorCode}</ColorCode>
            </MemoHeadingWrap>
          </MemoInfo>
          <CodeList>
            <CodeListItem>
              <p>RGB</p>
              {`${rgb.red} ${rgb.green} ${rgb.blue}`}
            </CodeListItem>
            <CodeListItem>
              <p>CMYK</p>
              {`${cmyk.cyan} ${cmyk.magenta} ${cmyk.yellow} ${cmyk.key}`}
            </CodeListItem>
            <CodeListItem>
              <p>HSV/HSB</p>
              {`${hsv.hue} ${hsv.saturation} ${hsv.brightness}`}
            </CodeListItem>
          </CodeList>
          <ActionIcons>
            <CommentIcon onClick={onOpen} color={"white"} />
            <LinkIcon onClick={() => setIsOpenLink(true)} color={"white"} />
            {canEdit && (
              <TrashIcon onClick={() => onOpenTrash()} color={"white"} />
            )}
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
      <TrashPopup
        isOpenTrash={isOpenTrash}
        onClose={onCloseTrash}
        onClick={() => DestroyMemo(memoContent.id!, memoContent.fileName)}
      >
        メモを削除しますか？
      </TrashPopup>
    </Display>
  );
};

const Display = styled.div<{ bg: string }>`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${(props) => `#${props.bg}`};

  ${({ theme }) => theme.media.desktop`
    width: 600px;
    height: 100vh;
  `}
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
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: 24px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

const ColorCode = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fontFamily.Roboto};
  font-size: 24px;
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;

const CodeList = styled.ul`
  margin-top: 26px;
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
  font-family: ${(props) => props.theme.fontFamily.Roboto};
`;

const CodeListItem = styled.li`
  display: flex;
  gap: 15px;

  & p {
    width: 65px;
    line-height: 1.2;
  }
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
`;
