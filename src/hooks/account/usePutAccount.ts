import {
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import { auth } from "../../FirebaseConfig";
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

  const SendPutMail = async (newEmail: string, password: string) => {
    const user = auth.currentUser;
    try {
      const credential = await EmailAuthProvider.credential(
        user?.email ?? "",
        password
      );
      user && (await reauthenticateWithCredential(user, credential));
      user && (await updateEmail(user, newEmail));
      navigate("/setting");
    } catch (e) {
      console.log(e);
    }
  };

  return { SendPutNickName, SendPutCreatedId, SendPutMail };
};
