import { FC, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { MemoLayout } from "../templates/MemoLayout";

type MemoContent = {
  id: number;
  colorCode: string;
  tagName: string;
  comment: string;
  url: string;
  createdAt: string;
};

export const MemoId = () => {
  const { memoId } = useParams();
  const location = useLocation();
  const [memoContent, setMemoContent] = useState<MemoContent>(
    location.state as MemoContent
  );

  return <MemoLayout {...memoContent} />;
};
