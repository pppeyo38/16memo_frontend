import { MemoType } from "../memo/type";

type FileSchema = {
  id: number;
  name: string;
  userId: number;
};

export type FileType = FileSchema;

export type FileWithMemoInfoType = FileType & {
  memo: {
    mainColor: string[];
    colorNum: number;
  };
};

export type FileWithMemosType = FileType & {
  memos: MemoType[];
};
