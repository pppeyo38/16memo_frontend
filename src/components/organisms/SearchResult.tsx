import type { FC } from "react";
import { useSearchMemos } from "../../hooks/memos/useSearchMemos";
import { ColorThumb } from "../atoms/ColorThumb";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

type Props = {
  tagName: string;
};

const { palette } = ColorTheme;
const { fontWeight, fontFamily } = Font;

export const SearchResult: FC<Props> = (props) => {
  const { tagName } = props;
  const { memosData, memosLoading, memosError } = useSearchMemos(tagName);
  const reversedData = memosData.map((_, i, a) => a[a.length - 1 - i]);

  return (
    <>
      <Tabs colorScheme="red" isFitted>
        <TabList sx={TabListStyle}>
          <Tab
            sx={TabStyle}
            _selected={{ color: "black", borderColor: palette.gray }}
          >
            古い順
          </Tab>
          <Tab
            sx={TabStyle}
            _selected={{ color: "black", borderColor: palette.gray }}
          >
            新しい順
          </Tab>
        </TabList>

        <TabPanels sx={TabPanelsStyle}>
          <TabPanel sx={TabPanelStyle}>
            {memosData.map((memo, index) => (
              <Wrapper key={index}>
                <ColorThumb memoId={memo.id} colorCode={memo.colorCode} />
              </Wrapper>
            ))}
          </TabPanel>
          <TabPanel sx={TabPanelStyle}>
            {reversedData.map((memo, index) => (
              <Wrapper key={index}>
                <ColorThumb memoId={memo.id} colorCode={memo.colorCode} />
              </Wrapper>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  &:nth-child(n + 3) {
    margin-top: 13px;
  }
`;

const TabListStyle = {
  width: "340px",
  border: "none",
  justifyContent: "space-around",
  fontSize: "16px",
  fontFamily: `${fontFamily.Noto}`,
};

const TabStyle = {
  color: `${palette.gray}`,
  fontWeight: `${fontWeight.medium}`,
  padding: "0px 0px 3px 0px",
  lineHeight: 1.43,
};

const TabPanelStyle = {
  width: "340px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  padding: "0px",
};

const TabPanelsStyle = {
  width: "340px",
  height: "calc(100vh - 190px)",
  overflowY: "scroll",
  paddingTop: "15px",
};
