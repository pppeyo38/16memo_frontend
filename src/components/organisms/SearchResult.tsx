import type { FC } from "react";
import { ColorThumb } from "../atoms/ColorThumb";
import { useState, useEffect } from "react";
import { MemoType } from "../../api/handler/memo/type";
import { API_URL } from "../../api/endpoint";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  Spinner,
} from "@chakra-ui/react";

type Props = {
  tagName: string;
};

const { palette } = ColorTheme;
const { fontWeight, fontFamily } = Font;

export const SearchResult: FC<Props> = (props) => {
  const { tagName } = props;

  // -----カタログからロジックをそのまま持ってきた-----
  const { data, error, loading } = useGetMemos(tagName);
  if (error) {
    return <p>error: {error.message}</p>;
  }
  if (loading) {
    return (
      <Center h="50vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#00A8A6"
          size="xl"
        />
      </Center>
    );
  }
  // -------------------------------------------------

  const reversedData = data.map((_, i, a) => a[a.length - 1 - i]);

  return (
    <>
      <Tabs colorScheme="red" isFitted>
        <TabList
          position="fixed"
          top="146px"
          left="50%"
          transform="translateX(-50%)"
          width="319px"
          border="none"
          justifyContent="space-around"
          fontSize="16px"
          fontFamily={fontFamily.Noto}
        >
          <Tab
            color={palette.gray}
            fontWeight={fontWeight.medium}
            padding="0px"
            _selected={{
              color: "black",
              borderColor: palette.gray,
            }}
          >
            古い順
          </Tab>
          <Tab
            color={palette.gray}
            fontWeight={fontWeight.medium}
            padding="0px"
            _selected={{
              color: "black",
              borderColor: palette.gray,
            }}
          >
            新しい順
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel
            width="340px"
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            padding="0px"
          >
            {data.map((memo) => (
              <Wrapper>
                <ColorThumb
                  key={memo.id}
                  memoId={memo.id}
                  colorCode={memo.colorCode}
                />
              </Wrapper>
            ))}
          </TabPanel>
          <TabPanel
            width="340px"
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            padding="0px"
          >
            {reversedData.map((memo) => (
              <Wrapper>
                <ColorThumb
                  key={memo.id}
                  memoId={memo.id}
                  colorCode={memo.colorCode}
                />
              </Wrapper>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

const useGetMemos = (tagName?: string) => {
  const [state, setState] = useState<{
    data: MemoType[];
    loading: boolean;
    error?: Error;
  }>({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = tagName
        ? `${API_URL}/memos/search?tag_name=${tagName}`
        : `${API_URL}/memos/search`;

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // 挙動確認の為に sleep
        const res = await fetch(url);
        const data = await res.json();
        setState({ data, loading: false });
      } catch (error: unknown) {
        if (error instanceof Error) {
          const err = error;
          setState((prev) => ({ ...prev, error: err, loading: false }));
        }
      }
    };
    fetchData();
  }, []);

  return state;
};

const Wrapper = styled.div`
  display: inline-block;
  &:nth-child(n + 3) {
    margin-top: 13px;
  }
`;
