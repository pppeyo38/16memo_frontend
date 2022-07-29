import type { FC } from "react";
import { useParams } from "react-router-dom";

type Props = {};

export const MemoEdit: FC<Props> = (props) => {
  const { memoId } = useParams();
  return <div>/memo/{memoId}/edit</div>;
};
