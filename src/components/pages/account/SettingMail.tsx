import type { FC } from "react";
import { auth } from "../../../FirebaseConfig";
import { usePutAccount } from "../../../hooks/account/usePutAccount";
import { SettingFeatureLayout } from "../../templates/SettingFeatureLayout";
import { DotBg } from "../../templates/bg/DotBg";

export const SettingMail: FC = () => {
  const user = auth.currentUser;
  const { SendPutMail } = usePutAccount();

  return (
    <DotBg>
      <SettingFeatureLayout
        title={"メールアドレス"}
        data={user?.email}
        onClick={SendPutMail}
      />
    </DotBg>
  );
};
