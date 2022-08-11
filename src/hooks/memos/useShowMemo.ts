import { useState, useEffect } from "react";
import { Memo } from "../../types/memo";
import { client } from "../../lib/axios";

type Response = {
  userId: number;
  memo: Memo;
};

export const useShowMemo = (memoId: number) => {
  const [state, setState] = useState(<Response>{});

  useEffect(() => {
    const fetchData = async () => {
      await client
        .get(`memos/${memoId}`)
        .then((response) => {
          console.log("メモ取得");
          setState(response.data);
        })
        .catch((error) => console.log("メモ取得失敗..."));
    };

    fetchData();
  }, []);

  return state;
};
