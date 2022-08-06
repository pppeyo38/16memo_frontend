import { useFiles } from "../../hooks/memos/useFiles";
import { FilesLayout } from "../templates/FilesLayout";

export const Files = () => {
  const state = useFiles();

  return <FilesLayout state={state} />;
};
