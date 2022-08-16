import { useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseConfig";

export const useSignOut = () => {
  const navigate = useNavigate();

  const SignOut = async () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  return { SignOut };
};
