import { useNavigate } from "react-router-dom";
import { client } from "../../lib/axios";

export const usePutFile = () => {
  const navigate = useNavigate();

  const SendPutFile = async (currentName: string, newName: string) => {
    const sendData = {
      name: newName,
    };
    console.log(sendData);
    await client.put(`color_file/${currentName}`, sendData).then((res) => {
      navigate(`/${res.data.name}`);
    });
  };

  return { SendPutFile };
};
