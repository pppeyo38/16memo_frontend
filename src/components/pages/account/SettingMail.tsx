import type { FC } from "react";
import { auth } from "../../../FirebaseConfig";
import { usePutAccount } from "../../../hooks/account/usePutAccount";
import { SettingFeatureLayout } from "../../templates/SettingFeatureLayout";

export const SettingMail: FC = () => {
  const user = auth.currentUser;
  const { SendPutMail } = usePutAccount();

  return (
    <SettingFeatureLayout
      title={"メールアドレス"}
      data={user?.email}
      onClick={SendPutMail}
    />
  );
};
