import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/Requests";
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
      const token = localStorage.getItem("token");
      try {
        await axios
          .get(requests.fetchFiles, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            if (response.data) {
              const filesData = response.data;
              setState({ filesData, filesLoading: false });
            }
          });
      } catch (filesError: unknown) {
        if (filesError instanceof Error) {
          const err = filesError;
          setState((prev) => ({ ...prev, filesError: err, loading: false }));
        }
      }
    };

    fetchData();
  }, []);

  return state;
};
