import { FC, useEffect } from "react";
import { useGetAccount } from "../../../hooks/account/useGetAccount";
import { SettingLayout } from "../../templates/SettingLayout";
import { Loading } from "../Loading";

export const Setting: FC = () => {
  const { accountData, getAccountData } = useGetAccount();

  useEffect(() => {
    getAccountData();
  }, []);

  return <>{accountData.loading ? <Loading /> : <SettingLayout />}</>;
};
