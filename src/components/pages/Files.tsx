import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGetFiles } from "../../hooks/files/useGetFiles";
import { HeaderLayout } from "../templates/HeaderLayout";
import { FilesLayout } from "../templates/FilesLayout";
import { DotBg } from "../../style/DotBg";

export const Files = () => {
  const { filesData, getFilesData } = useGetFiles();
  const location = useLocation();

  useEffect(() => {
    getFilesData();
  }, [location.state]);

  return (
    <HeaderLayout>
      <DotBg>
        <FilesLayout filesData={filesData} />
      </DotBg>
    </HeaderLayout>
  );
};
