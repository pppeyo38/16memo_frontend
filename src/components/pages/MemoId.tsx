import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MemoLayout } from "../templates/MemoLayout";

type FileInfo = {
  id: number;
  name: string;
};

type MemoDisplay = {
  id: number;
  colorCode: string;
  tagName: string;
  comment: string;
  url: string;
  createdAt: string;
  fileInfo: FileInfo;
};

type StateType = {
  editMode: boolean;
  state: MemoDisplay;
};

export const MemoId = () => {
  const location = useLocation();
  const state = location.state as StateType;
  const [memoContent, setMemoContent] = useState<MemoDisplay>(
    state.state as MemoDisplay
  );

  return <MemoLayout memoContent={memoContent} editMode={state.editMode} />;
};
