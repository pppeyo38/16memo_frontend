import { FC, useState } from "react";
import { MemoCreateLayout } from "../templates/MemoCreateLayout";

type FileInfo = {
  id: number;
  name: string;
};

type MemoContent = {
  id: number;
  colorCode: string;
  tagName: string;
  comment: string;
  url: string;
  createdAt: string;
  fileInfo: FileInfo;
};

const defaultValue = {
  id: 1,
  colorCode: "00A8A6",
  tagName: "",
  comment: "",
  url: "",
  createdAt: "",
  fileInfo: {
    id: 1,
    name: "",
  },
};

export const MemoAdd: FC = () => {
  const [memoContent, setMemoContent] = useState<MemoContent>(defaultValue);
  return <MemoCreateLayout {...memoContent} />;
};
