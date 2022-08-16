import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/account/useAuth";
import { useShowMemo } from "../../hooks/memos/useShowMemo";
import { MemoCreateLayout } from "../templates/MemoCreateLayout";
import { NotFoundLayout } from "../templates/NotFoundLayout";

export const MemoEdit = () => {
  const { currentUser } = useAuth();
  const { memoData, getMemoData } = useShowMemo();
  const { memoId } = useParams();

  useEffect(() => {
    getMemoData(memoId);
  }, []);

  return (
    <>
      {!memoData.loading &&
        (currentUser?.uid === memoData.getData.uid ? (
          <MemoCreateLayout memoData={memoData.getData.memo} isNew={false} />
        ) : (
          <NotFoundLayout>メモが見つかりません</NotFoundLayout>
        ))}
    </>
  );
};
