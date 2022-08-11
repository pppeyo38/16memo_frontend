import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Memo } from "../../types/memo";
import { useHexToRgb } from "../../hooks/color/useHexToRgb";
import { useCmykToRgb } from "../../hooks/color/useCmykToRgb";
import { useHsvToRgb } from "../../hooks/color/useHsvToRgb";
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

type Props = {
  memoContent: Memo;
  editMode: boolean;
};

export const MemoLayout: FC<Props> = (props) => {
  const { memoContent, editMode } = props;
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenLink, setIsOpenLink] = useState<boolean>(false);
  const [isOpenTrash, setIsOpenTrash] = useState<boolean>(false);

  const { setHextoRGB } = useHexToRgb();
  const { setRGBtoCMYK } = useCmykToRgb();
  const { setRGBtoHSV } = useHsvToRgb();
  const rgb = setHextoRGB(memoContent.colorCode);
  const cmyk = setRGBtoCMYK(rgb);
  const hsv = setRGBtoHSV(rgb);

  const handleClick = () => {
    navigate(`/memo/${memoContent.id}/edit`, { state: memoContent });
  };

  const onCloseLink = () => setIsOpenLink(false);
  const onCloseTrash = () => setIsOpenTrash(false);

  return (
    <Display bg={memoContent.colorCode}>
      <Content>
        <Head>
          <ReturnArrow onClick={() => navigate(-1)} color={"white"} />
          {editMode && <EditButton onClick={handleClick} />}
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
            {editMode && (
              <TrashIcon onClick={() => setIsOpenTrash(true)} color={"white"} />
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
    line-height: 1.2;
  }
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
`;
