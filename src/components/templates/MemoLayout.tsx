import { ReturnArrow } from "../atoms/ReturnArrow";
import { EditButton } from "../atoms/EditButton";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import styled from "styled-components";

type MemoContent = {
  id: number;
  colorCode: string;
  tagName: string;
  comment: string;
  url: string;
  createdAt: string;
};

export const MemoLayout = (memoContent: MemoContent) => {
  return (
    <DisPlay bg={memoContent.colorCode}>
      <Content>
        <Head>
          <ReturnArrow path={"/"} color={"white"} />
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
            <button>
              <img src="http://localhost:3000/src/images/iconComment.svg" />
            </button>
            <button>
              <img src="http://localhost:3000/src/images/iconLink.svg" />
            </button>
            <button>
              <img src="http://localhost:3000/src/images/iconDelete.svg" />
            </button>
          </ActionIcons>
        </Main>
      </Content>
    </DisPlay>
  );
};

const { palette } = ColorTheme;
const { fontWeight, fontFamily } = Font;

const DisPlay = styled.div<{ bg: string }>`
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
