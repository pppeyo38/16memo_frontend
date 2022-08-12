export type File = {
  id: number;
  name: string;
  userId: number;
  memo: thumbnail;
  created_at: string;
};

type thumbnail = {
  mainColor: string[];
  colorNum: number;
};
