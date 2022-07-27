import type { FC } from "react";
import { useSearchParams, Link } from "react-router-dom";

type Props = {}

export const Search: FC<Props> = (props) => {
  const [searchParams] = useSearchParams();
  const tagName = searchParams.getAll("q");

  console.log("TagName=" + tagName);

  return (
    <>
      <h1> result {tagName}</h1>
    </>
  );
}