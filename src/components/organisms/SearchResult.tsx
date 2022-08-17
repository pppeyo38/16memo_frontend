import type { FC } from "react";
import { use100vh } from "react-div-100vh";
import { useSearchMemos } from "../../hooks/memos/useSearchMemos";
import { ColorThumb } from "../molecules/ColorThumb";
import styled from "styled-components";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

type Props = {
  tagName: string;
};

export const SearchResult: FC<Props> = (props) => {
  const { tagName } = props;
  const { memosData, memosLoading, memosError } = useSearchMemos(tagName);
  const reversedData = memosData.map((_, i, a) => a[a.length - 1 - i]);
  const height = use100vh();
  const tabPanelsHeight = height ? `${height * 0.8}px` : "calc(100vh - 190px)";

  return (
    <>
      <Tabs colorScheme="red" isFitted>
        <TabList sx={TabListStyle}>
          <Tab
            sx={TabStyle}
            _selected={{ color: "black", borderColor: "#9B9B9B" }}
          >
            古い順
          </Tab>
          <Tab
            sx={TabStyle}
            _selected={{ color: "black", borderColor: "#9B9B9B" }}
          >
            新しい順
          </Tab>
        </TabList>

        <TabPanels sx={{ ...TabPanelsStyle, height: tabPanelsHeight }}>
          <TabPanel sx={TabPanelStyle}>
            {memosData.map((memo, index) => (
              <Wrapper key={index}>
                <ColorThumb memoId={memo.id} content={memo} canEdit={false} />
              </Wrapper>
            ))}
          </TabPanel>
          <TabPanel sx={TabPanelStyle}>
            {reversedData.map((memo, index) => (
              <Wrapper key={index}>
                <ColorThumb memoId={memo.id} content={memo} canEdit={false} />
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
  fontFamily: "Noto Sans JP, sans-serif",
};

const TabStyle = {
  color: "#9B9B9B",
  fontWeight: "500",
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
  overflowY: "scroll",
  padding: "15px 0 25px",
};
