import {
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import { client } from "../../lib/axios";

export const useDestroyAccount = () => {
  const navigate = useNavigate();

  const DestroyUser = async (id: number) => {
    await client.delete(`users/${id}`).then(() => {});
  };

  const DestroyAccount = async (id: number, password: string) => {
    const user = auth.currentUser;
    try {
      const credential = await EmailAuthProvider.credential(
        user?.email ?? "",
        password
      );
      user && (await reauthenticateWithCredential(user, credential));
      user && (await deleteUser(user));
      user && (await DestroyUser(id));
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return { DestroyAccount };
};
