import { FC, useState } from "react";
import { PostMemo } from "../../hooks/memos/usePostMemo";
import { MemoCreateLayout } from "../templates/MemoCreateLayout";

// 初期状態のメモ
const defaultValue = {
  colorCode: "00A8A6",
  tagName: "",
  comment: "",
  url: "",
  fileName: "",
};

export const MemoAdd: FC = () => {
  const [newMemo, setNewMemo] = useState<PostMemo>(defaultValue);

  return <MemoCreateLayout newMemo={newMemo} setNewMemo={setNewMemo} />;
};
