import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/Requests";

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
      const token = localStorage.getItem("token");
      try {
        await axios
          .get(requests.getFilesName, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            if (response.data) {
              const filesList = response.data;
              setState({ filesList, filesLoading: false });
            }
          });
      } catch (filesError: unknown) {
        if (filesError instanceof Error) {
          const err = filesError;
          setState((prev) => ({
            ...prev,
            filesError: err,
            filesLoading: false,
          }));
        }
      }
    };

    fetchData();
  }, []);

  return state;
};
