import { useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import { useLoginUser } from "../useLoginUser";

export const useSignOut = () => {
  const navigate = useNavigate();
  const { setLoginUser } = useLoginUser();

  const SignOut = async () => {
    auth.signOut().then(() => {
      setLoginUser(null);
      navigate("/login");
    });
  };

  return { SignOut };
};
