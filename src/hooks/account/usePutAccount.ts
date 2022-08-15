import {
  updateEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { client } from "../../lib/axios";

export const usePutAccount = () => {
  const navigate = useNavigate();

  const SendPutNickName = async (newData: string) => {
    const sendData = {
      nickname: newData,
    };
    await client.put("settings_account", sendData).then((res) => {
      navigate("/setting", { state: res.status });
    });
  };

  const SendPutCreatedId = async (newData: string) => {
    const sendData = {
      createdID: newData,
    };
    await client.put("settings_account", sendData).then((res) => {
      navigate("/setting", { state: res.status });
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

  const SendPutPw = async (newPassword: string, password: string) => {
    const user = auth.currentUser;
    try {
      const credential = await EmailAuthProvider.credential(
        user?.email ?? "",
        password
      );
      user && (await reauthenticateWithCredential(user, credential));
      user && (await updatePassword(user, newPassword));
      navigate("/setting");
    } catch (e) {
      console.log(e);
    }
  };

  return { SendPutNickName, SendPutCreatedId, SendPutMail, SendPutPw };
};
