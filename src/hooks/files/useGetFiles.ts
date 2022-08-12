import { useState, useCallback } from "react";
import { client } from "../../lib/axios";
import { File } from "../../types/file";

export type filesDataType = {
  getData: File[];
  loading: boolean;
  error?: Error;
};

export const useGetFiles = () => {
  const [filesData, setFilesData] = useState<filesDataType>({
    getData: <File[]>{},
    loading: true,
  });

  const getFilesData = useCallback(async () => {
    await client
      .get<File[]>("color_files")
      .then((res) => {
        setFilesData({ getData: res.data, loading: false });
      })
      .catch((err) => console.log(err));
  }, []);

  return { filesData, setFilesData, getFilesData };
};
