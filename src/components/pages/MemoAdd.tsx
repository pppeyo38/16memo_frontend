import { FC } from "react";
import { MemoCreateLayout } from "../templates/MemoCreateLayout";

export const MemoAdd: FC = () => {
  const defaultValue = {
    colorCode: "00A8A6",
    tagName: "",
    comment: "",
    url: "",
    fileName: "",
  };

  return <MemoCreateLayout memoData={defaultValue} isNew={true} />;
};
