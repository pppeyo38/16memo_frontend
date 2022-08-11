import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Memo } from "../../types/memo";
import { MemoCreateLayout } from "../templates/MemoCreateLayout";

export const MemoEdit = () => {
  const location = useLocation();
  const [memoContent, setMemoContent] = useState<Memo>(location.state as Memo);

  return <MemoCreateLayout newMemo={memoContent} setNewMemo={setMemoContent} />;
};
