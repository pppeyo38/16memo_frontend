import type { FC } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SearchLayout } from "../templates/SearchLayout";
import { SearchResult } from "../organisms/SearchResult";

type Props = {};

export const Search: FC<Props> = (props) => {
  const [searchParams] = useSearchParams();
  const tagName = searchParams.getAll("tag");

  console.log("TagName=" + tagName);
  console.log(tagName.length);

  return (
    <>
      {tagName.length == 0 ? (
        <SearchLayout ttl="検索" isSearchResult={false}></SearchLayout>
      ) : (
        <SearchLayout ttl={"#" + tagName[0]} isSearchResult={true}>
          <SearchResult tagName={tagName[0]} />
        </SearchLayout>
      )}
    </>
  );
};
