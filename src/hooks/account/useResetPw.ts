import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import { useNavigate } from "react-router-dom";

export const useResetPw = () => {
  const navigate = useNavigate();
  const actionCodeSettings = {
    // パスワード再設定後のリダイレクト URL
    url: "http://localhost:3000/login",
    handleCodeInApp: false,
  };

  const ResetPw = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
    } catch (e) {
      console.log(e);
    }
  };

  return { ResetPw };
};
