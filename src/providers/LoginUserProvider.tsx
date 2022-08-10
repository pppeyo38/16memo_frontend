import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { auth } from "../FirebaseConfig";
import { client } from "../lib/axios";
import { Loading } from "../components/pages/Loading";

type User = {
  id: number;
  nickname: string;
  createdID: string;
};

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        client.get("login").then((response) => {
          const isAdmin = true;
          setLoginUser({ ...response.data, isAdmin });
        });
      }
    });
  }, []);

  if (loginUser?.isAdmin) {
    return (
      <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
        {children}
      </LoginUserContext.Provider>
    );
  } else {
    return <Loading />;
  }
};

export { LoginUserContext, LoginUserProvider };
