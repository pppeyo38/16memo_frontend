import { useParams } from "react-router-dom";
import { useShowMemo } from "../../hooks/memos/useShowMemo";
import { MemoLayout } from "../templates/MemoLayout";
import { PageTemplate } from "../templates/PageTemplate";
import { useEffect } from "react";

export const MemoId = () => {
  const { memoData, getMemoData } = useShowMemo();
  const { memoId } = useParams();

  useEffect(() => {
    getMemoData(memoId);
  }, [memoId]);

  return (
    <>
      {!memoData.loading && (
        <PageTemplate>
          <MemoLayout memoData={memoData} />
        </PageTemplate>
      )}
    </>
  );
};
