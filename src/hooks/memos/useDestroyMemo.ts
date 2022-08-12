import { useNavigate } from "react-router-dom";
import { client } from "../../lib/axios";

export const useDestroyMemo = () => {
  const navigate = useNavigate();

  const DestroyMemo = async (id: number, fileName: string) => {
    await client.delete(`memos/${id}`).then(() => {
      navigate(`/${fileName}`);
    });
  };

  return { DestroyMemo };
};
