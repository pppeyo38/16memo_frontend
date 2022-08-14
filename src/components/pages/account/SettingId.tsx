import type { FC } from "react";
import { usePutAccount } from "../../../hooks/account/usePutAccount";
import { SettingFeatureLayout } from "../../templates/SettingFeatureLayout";
import { useLoginUser } from "../../../hooks/useLoginUser";

export const SettingId: FC = () => {
  const { loginUser } = useLoginUser();
  const { SendPutCreatedId } = usePutAccount();

  return (
    <SettingFeatureLayout
      title={"ユーザー名"}
      data={loginUser?.createdID}
      onClick={SendPutCreatedId}
    />
  );
};
