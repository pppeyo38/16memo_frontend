import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
} from "react";

export type Account = {
  nickname: string;
  createdID: string;
};

export type AccountContextType = {
  account: Account;
  setAccount: Dispatch<SetStateAction<Account>>;
};

export const AccountContext = createContext<AccountContextType>(
  {} as AccountContextType
);

export const AccountProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [account, setAccount] = useState<Account>({} as Account);

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
};
