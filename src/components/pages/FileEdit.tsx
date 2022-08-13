import { useParams } from "react-router-dom";
import { FileEditLayout } from "../templates/FileEditLayout";

export const FileEdit = () => {
  const { fileName } = useParams();

  return (
    <>{fileName !== undefined && <FileEditLayout fileName={fileName} />}</>
  );
};
