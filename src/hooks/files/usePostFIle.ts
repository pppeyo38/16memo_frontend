import { useNavigate } from "react-router-dom";
import { client } from "../../lib/axios";

export const usePostFile = () => {
  const navigate = useNavigate();

  const SendPostFile = async (fileName: string) => {
    const sendData = {
      name: fileName,
    };
    console.log(sendData);
    await client.post("color_files", sendData).then(() => {
      navigate("/");
    });
  };

  return { SendPostFile };
};
