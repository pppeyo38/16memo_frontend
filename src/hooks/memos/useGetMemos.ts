import { useState, useEffect } from "react";
import { Memo } from "../../types/memo";
import { client } from "../../lib/axios";

type MemosDataType = {
  id: number;
  name: string;
  memos: Memo[];
};

export const useGetMemos = (fileId: number) => {
  const [state, setState] = useState<{
    memosData: MemosDataType;
    memosLoading: boolean;
    memosError?: Error;
  }>({
    memosData: <MemosDataType>{},
    memosLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      await client
        .get(`color_files/${fileId}`)
        .then((response) => {
          setState({ memosData: response.data, memosLoading: false });
        })
        .catch((error) => console.log("メモ情報取得失敗..."));
    };
    fetchData();
  }, []);

  return state;
};
