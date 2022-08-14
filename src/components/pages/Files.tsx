import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGetFiles } from "../../hooks/files/useGetFiles";
import { FilesLayout } from "../templates/FilesLayout";
import { PageTemplate } from "../templates/PageTemplate";

export const Files = () => {
  const { filesData, getFilesData } = useGetFiles();
  const location = useLocation();

  useEffect(() => {
    getFilesData();
  }, [location.state]);

  return (
    <PageTemplate>
      <FilesLayout filesData={filesData} />
    </PageTemplate>
  );
};
