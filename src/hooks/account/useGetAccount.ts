import { useContext, useState } from "react";
import { client } from "../../lib/axios";
import { Account, AccountContext } from "../../providers/AccountProvider";

export type accountDataType = {
  getData: Account;
  loading: boolean;
  error?: Error;
};

export const useGetAccount = () => {
  const [accountData, setAccountData] = useState<accountDataType>({
    getData: <Account>{},
    loading: true,
  });
  const { account, setAccount } = useContext(AccountContext);

  const getAccountData = async () => {
    await client
      .get<Account>("/account")
      .then((res) => {
        setAccountData({ getData: res.data, loading: false });
        setAccount({ ...res.data });
      })
      .catch((err) => console.log(err));
  };

  return { accountData, setAccountData, getAccountData };
};
