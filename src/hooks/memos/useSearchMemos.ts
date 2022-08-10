import { useState, useEffect } from "react";
import { client } from "../../lib/axios";

type MemoType = {
  id: number;
  colorCode: string;
  comment: string;
  url: string;
  tagName: string;
  createdAt: string;
};

export const useSearchMemos = (tagName: string) => {
  const [state, setState] = useState<{
    memosData: MemoType[];
    memosLoading: boolean;
    memosError?: Error;
  }>({
    memosData: [],
    memosLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      await client
        .get(`search?q=${tagName}`)
        .then((response) => {
          setState({ memosData: response.data, memosLoading: false });
        })
        .catch((error) => console.log("メモ検索失敗..."));
    };
    fetchData();
  }, []);

  return state;
};
