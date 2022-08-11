import { useParams } from "react-router-dom";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useShowMemo } from "../../hooks/memos/useShowMemo";
import { MemoLayout } from "../templates/MemoLayout";

export const MemoId = () => {
  const { loginUser } = useLoginUser();
  const { memoId } = useParams();
  const data = useShowMemo(Number(memoId));

  const editMode = loginUser?.id === data.userId;

  return <MemoLayout memoContent={data.memo} editMode={editMode} />;
};
