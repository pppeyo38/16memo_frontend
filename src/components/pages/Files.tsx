import { useFiles } from "../../hooks/memos/useFiles";
import { HeaderLayout } from "../templates/HeaderLayout";
import { FilesLayout } from "../templates/FilesLayout";

export const Files = () => {
  const state = useFiles();

  return (
    <HeaderLayout>
      <FilesLayout state={state} />
    </HeaderLayout>
  );
};
