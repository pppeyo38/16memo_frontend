import { FC } from "react";
import { MemoCreateLayout } from "../templates/MemoCreateLayout";
import { PageTemplate } from "../templates/PageTemplate";

export const MemoAdd: FC = () => {
  const defaultValue = {
    colorCode: "00A8A6",
    tagName: "",
    comment: "",
    url: "",
    fileName: "",
  };

  return (
    <PageTemplate>
      <MemoCreateLayout memoData={defaultValue} isNew={true} />
    </PageTemplate>
  );
};
