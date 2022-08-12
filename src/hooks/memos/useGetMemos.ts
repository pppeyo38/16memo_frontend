import { useState, useCallback } from "react";
import { client } from "../../lib/axios";
import { Memo } from "../../types/memo";

type getDataType = {
  id: number;
  name: string;
  memos: Memo[];
};

export type memosDataType = {
  getData: getDataType;
  loading: boolean;
  error?: Error;
};

export const useGetMemos = () => {
  const [memosData, setMemosData] = useState<memosDataType>({
    getData: <getDataType>{},
    loading: true,
  });

  const getMemosData = useCallback(async (fileName: string | undefined) => {
    await client
      .get<getDataType>(`color_file/${fileName}`)
      .then((res) => {
        setMemosData({ getData: res.data, loading: false });
      })
      .catch((err) => console.log(err));
  }, []);

  return { memosData, setMemosData, getMemosData };
};
