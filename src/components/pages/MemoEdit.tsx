import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/account/useAuth";
import { useShowMemo } from "../../hooks/memos/useShowMemo";
import { MemoCreateLayout } from "../templates/MemoCreateLayout";

export const MemoEdit = () => {
  const { currentUser } = useAuth();
  const { memoData, getMemoData } = useShowMemo();
  const { memoId } = useParams();

  useEffect(() => {
    getMemoData(memoId);
  }, []);

  // TODO: ユーザーに編集権限があるか確かめる
  return (
    <>
      {!memoData.loading &&
        (currentUser?.uid ? (
          <MemoCreateLayout memoData={memoData.getData.memo} isNew={false} />
        ) : (
          <div>メモが見つかりません</div>
        ))}
    </>
  );
};
