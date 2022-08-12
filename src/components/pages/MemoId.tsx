import { useParams } from "react-router-dom";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useShowMemo } from "../../hooks/memos/useShowMemo";
import { MemoLayout } from "../templates/MemoLayout";
import { useEffect, useState } from "react";

export const MemoId = () => {
  const { loginUser } = useLoginUser();
  const { memoData, getMemoData } = useShowMemo();
  const { memoId } = useParams();
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    getMemoData(memoId);
    setCanEdit(loginUser?.id === memoData.getData.useId);
  }, [memoId]);

  return (
    <>
      {!memoData.loading && (
        <MemoLayout memoData={memoData} editMode={canEdit} />
      )}
    </>
  );
};
