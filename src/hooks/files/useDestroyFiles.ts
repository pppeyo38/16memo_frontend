import { useNavigate } from "react-router-dom";
import { client } from "../../lib/axios";

export const useDestroyFiles = () => {
  const navigate = useNavigate();

  const DestroyFiles = async (fileIds: string[]) => {
    await client.delete(`color_files/${fileIds}`).then((res) => {
      navigate("/", { state: res.status });
    });
  };

  return { DestroyFiles };
};
