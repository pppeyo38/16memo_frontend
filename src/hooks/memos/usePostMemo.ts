import { useState } from "react";
import axios from "axios";

type FileInfo = {
  id: number;
  name: string;
};

export type PostMemo = {
  colorCode: string;
  tagName: string;
  comment: string;
  url: string;
  fileInfo: FileInfo;
};

export const usePostMemos = (memoContent: PostMemo) => {
  const [newMemo, setNewMemo] = useState<PostMemo>(memoContent);

  return { newMemo, setNewMemo };
};
