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
    await client.put("settings_account", sendData).then((res) => {
      navigate("/setting", { state: res.status });
      setLoginUser({ ...res.data, isAdmin: true });
    });
  };

  const SendPutCreatedId = async (newData: string) => {
    const sendData = {
      createdID: newData,
    };
    await client.put("settings_account", sendData).then((res) => {
      navigate("/setting", { state: res.status });
      setLoginUser({ ...res.data, isAdmin: true });
    });
  };

  const SendPutMail = async (newData: string) => {
    const sendData = {
      email: newData,
    };
    console.log(sendData);
    await client.put("settings_authAccount", sendData).then((res) => {
      console.log(res);
      navigate("/setting");
    });
  };

  return { SendPutNickName, SendPutCreatedId, SendPutMail };
};
