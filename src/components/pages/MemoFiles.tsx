import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useGetMemos } from "../../hooks/memos/useGetMemos";
import { MemosFileLayout } from "../templates/MemosFileLayout";

export const MemoFiles = () => {
  const { fileName } = useParams<{ fileName: string }>();
  const { memosData, getMemosData } = useGetMemos();
  const location = useLocation();

  useEffect(() => {
    getMemosData(fileName);
  }, [location.state]);

  return <MemosFileLayout memosData={memosData} />;
};
