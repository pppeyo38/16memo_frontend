import type { FC } from "react";
import { auth } from "../../../FirebaseConfig";
import { SettingFeatureLayout } from "../../templates/SettingFeatureLayout";

export const SettingMail: FC = () => {
  const user = auth.currentUser;
  return <SettingFeatureLayout title={"メールアドレス"} data={user?.email} />;
};
