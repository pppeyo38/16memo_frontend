import type { FC } from "react";
import { auth } from "../../../FirebaseConfig";
import { SettingEmail } from "../../templates/SettingEmail";

export const SettingMail: FC = () => {
  const user = auth.currentUser;

  return <SettingEmail data={user?.email} />;
};
