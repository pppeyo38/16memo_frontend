import { User } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../FirebaseConfig";

// User: ログインだった場合 User オブジェクトが返る
// null: 未ログインの場合 null が返る
// undefined: APIコールの結果が返る前
interface AuthContext {
  currentUser: User | null | undefined;
}

export type CurrentUserType = {
  currentUser: User | null | undefined;
};

const AuthContext = createContext<AuthContext>({ currentUser: undefined });

const AuthProvider = (props: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
