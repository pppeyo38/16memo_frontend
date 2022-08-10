import { useState, useEffect } from "react";
import { client } from "../../lib/axios";
import { FileWithMemoInfoType } from "../../api/handler/file/type";

export const useFiles = () => {
  const [state, setState] = useState<{
    filesData: FileWithMemoInfoType[];
    filesLoading: boolean;
    filesError?: Error;
  }>({
    filesData: [],
    filesLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      await client
        .get("color_files")
        .then((response) => {
          setState({ filesData: response.data, filesLoading: false });
        })
        .catch((error) => console.log("useFiles: " + error));
    };

    fetchData();
  }, []);

  return state;
};
