import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetMemos } from "../../hooks/memos/useGetMemos";
import { MemosFileLayout } from "../templates/MemosFileLayout";

export const MemoFiles = () => {
  const { fileName } = useParams<{ fileName: string }>();
  const { memosData, getMemosData } = useGetMemos();

  useEffect(() => {
    getMemosData(fileName);
  }, [fileName]);

  return <MemosFileLayout memosData={memosData} />;
};
