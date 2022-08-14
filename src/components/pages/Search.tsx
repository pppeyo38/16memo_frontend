import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { HeaderLayout } from "../templates/HeaderLayout";
import { SearchLayout } from "../templates/SearchLayout";
import { DotBg } from "../../style/DotBg";

export const Search: FC = () => {
  const [searchParams] = useSearchParams();
  const tagName = searchParams.getAll("tag");

  const [searchTag, setSearchTag] = useState<string>(tagName[0]);
  const [isResult, setIsResult] = useState<boolean>(
    tagName.length === 0 ? false : true
  );

  return (
    <HeaderLayout>
      <DotBg>
        <SearchLayout
          isResult={isResult}
          setIsResult={setIsResult}
          searchTag={searchTag}
          setSearchTag={setSearchTag}
        />
      </DotBg>
    </HeaderLayout>
  );
};
