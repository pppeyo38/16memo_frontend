import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../useLoginUser";
import { client } from "../../lib/axios";

export const usePutAccount = () => {
  const navigate = useNavigate();
  const { loginUser, setLoginUser } = useLoginUser();

  const SendPutNickName = async (newData: string) => {
    const sendData = {
      nickname: newData,
    };
    console.log(sendData);
    await client.put("settings_account", sendData).then((res) => {
      navigate("/setting", { state: res.status });
      console.log(loginUser);
    });
  };

  const SendPutCreatedId = async (newData: string) => {
    const sendData = {
      createdID: newData,
    };
    console.log(sendData);
    await client.put("settings_account", sendData).then(() => {
      navigate("/setting");
    });
  };

  const SendPutMail = async (newData: string) => {
    const sendData = {
      email: newData,
    };
    console.log(sendData);
    await client.put("settings_authAccount", sendData).then(() => {
      navigate("/setting");
    });
  };

  return { SendPutNickName, SendPutCreatedId, SendPutMail };
};
