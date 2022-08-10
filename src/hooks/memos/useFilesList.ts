import { useState, useEffect } from "react";
import { client } from "../../lib/axios";

type filesListData = {
  id: number;
  name: string;
};

export const useFilesList = () => {
  const [state, setState] = useState<{
    filesList: filesListData[];
    filesLoading: boolean;
    filesError?: Error;
  }>({
    filesList: [],
    filesLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      await client
        .get("files_name")
        .then((response) => {
          setState({ filesList: response.data, filesLoading: false });
        })
        .catch(() => console.log("ファイル名一覧の取得に失敗しました..."));
    };

    fetchData();
  }, []);

  return state;
};
