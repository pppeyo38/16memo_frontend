import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
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

export const MemoEdit = () => {
  const location = useLocation();
  const [memoContent, setMemoContent] = useState<MemoContent>(
    location.state as MemoContent
  );
  const { memoId } = useParams();
  // return <MemoCreateLayout {...memoContent} />;
};
