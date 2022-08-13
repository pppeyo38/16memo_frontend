import { useNavigate } from "react-router-dom";
import { client } from "../../lib/axios";

export const useDestroyMemo = () => {
  const navigate = useNavigate();

  const DestroyMemo = async (id: number | string[], fileName: string) => {
    await client.delete(`memos/${id}`).then((res) => {
      navigate(`/${fileName}`, { state: res.status });
    });
  };

  return { DestroyMemo };
};
