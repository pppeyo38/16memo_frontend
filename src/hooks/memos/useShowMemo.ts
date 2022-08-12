import { useState, useCallback } from "react";
import { client } from "../../lib/axios";
import { Memo } from "../../types/memo";

type getDataType = {
  useId: number;
  memo: Memo;
};

export type memoDataType = {
  getData: getDataType;
  loading: boolean;
  error?: Error;
};

export const useShowMemo = () => {
  const [memoData, setMemoData] = useState<memoDataType>({
    getData: <getDataType>{},
    loading: true,
  });

  const getMemoData = useCallback(async (memoId: string | undefined) => {
    await client
      .get<getDataType>(`memos/${memoId}`)
      .then((res) => {
        setMemoData({ getData: res.data, loading: false });
      })
      .catch((err) => console.log(err));
  }, []);

  return { memoData, setMemoData, getMemoData };
};
