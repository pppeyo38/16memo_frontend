import { useEffect } from "react";
import { useGetFiles } from "../../hooks/files/useGetFiles";
import { HeaderLayout } from "../templates/HeaderLayout";
import { FilesLayout } from "../templates/FilesLayout";

export const Files = () => {
  const { filesData, getFilesData } = useGetFiles();

  useEffect(() => {
    getFilesData();
  }, []);

  return (
    <HeaderLayout>
      <FilesLayout filesData={filesData} />
    </HeaderLayout>
  );
};
