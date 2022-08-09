import { useState } from "react";
import axios from "axios";

type FileInfo = {
  id: number;
  name: string;
};

export type MemoContent = {
  id: number;
  colorCode: string;
  tagName: string;
  comment: string;
  url: string;
  createdAt: string;
  fileInfo: FileInfo;
};

export const usePostMemos = (memoContent: MemoContent) => {
  const [newMemo, setNewMemo] = useState<MemoContent>(memoContent);

  return { newMemo, setNewMemo };
};
