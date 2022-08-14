import type { FC } from "react";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { usePutAccount } from "../../../hooks/account/usePutAccount";
import { SettingFeatureLayout } from "../../templates/SettingFeatureLayout";

export const SettingName: FC = () => {
  const { loginUser } = useLoginUser();
  const { SendPutNickName } = usePutAccount();

  return (
    <SettingFeatureLayout
      title={"ニックネーム"}
      data={loginUser?.nickname}
      onClick={SendPutNickName}
    />
  );
};
