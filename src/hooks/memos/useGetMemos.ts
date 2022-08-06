import { useState, useEffect } from "react";
import axios from "axios";

type MemoType = {
  id: number;
  colorCode: string;
  comment: string;
  url: string;
  tagName: string;
  createdAt: string;
};

type MemosDataType = {
  id: number;
  name: string;
  memos: MemoType[];
};

export const useGetMemos = (fileId: number) => {
  const [state, setState] = useState<{
    memosData: MemosDataType;
    memosLoading: boolean;
    memosError?: Error;
  }>({
    memosData: <MemosDataType>{},
    memosLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        await axios
          .get(`http://localhost:3200/color_files/${fileId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            if (response.data) {
              const memosData = response.data;
              setState({ memosData, memosLoading: false });
            }
          });
      } catch (memosError: unknown) {
        if (memosError instanceof Error) {
          const err = memosError;
        }
      }
    };
    fetchData();
  }, []);

  return state;
};
