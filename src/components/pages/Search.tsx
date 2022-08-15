import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchLayout } from "../templates/SearchLayout";

export const Search: FC = () => {
  const [searchParams] = useSearchParams();
  const tagName = searchParams.getAll("tag");

  const [searchTag, setSearchTag] = useState<string>(tagName[0]);
  const [isResult, setIsResult] = useState<boolean>(
    tagName.length === 0 ? false : true
  );

  return (
    <SearchLayout
      isResult={isResult}
      setIsResult={setIsResult}
      searchTag={searchTag}
      setSearchTag={setSearchTag}
    />
  );
};
