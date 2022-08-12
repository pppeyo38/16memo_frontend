import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useShowMemo } from "../../hooks/memos/useShowMemo";
import { MemoCreateLayout } from "../templates/MemoCreateLayout";

export const MemoEdit = () => {
  const { loginUser } = useLoginUser();
  const { memoData, getMemoData } = useShowMemo();
  const { memoId } = useParams();

  useEffect(() => {
    getMemoData(memoId);
  }, []);

  return (
    <>
      {!memoData.loading &&
        (loginUser?.id === memoData.getData.userId ? (
          <MemoCreateLayout memoData={memoData.getData.memo} isNew={false} />
        ) : (
          <div>メモが見つかりません</div>
        ))}
    </>
  );
};
