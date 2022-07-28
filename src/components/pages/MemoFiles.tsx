import type { FC } from "react";
import { useParams } from "react-router-dom";

type Props = {};

export const MemoFiles: FC<Props> = (props) => {
  const { fileName } = useParams();

  return <div>/{fileName}</div>;
};
