import { useState, useEffect, useCallback } from "react";
import { Memo } from "../../types/memo";
import { client } from "../../lib/axios";

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
