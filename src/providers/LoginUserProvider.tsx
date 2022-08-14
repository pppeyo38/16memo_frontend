import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

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

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};

export { LoginUserContext, LoginUserProvider };
