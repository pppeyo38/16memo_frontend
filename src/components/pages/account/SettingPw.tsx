import type { FC } from "react";
import { SettingPwLayout } from "../../templates/SettingPwLayout";
import { GuestSettingPwLayout } from "../../templates/guest/GuestSettingPwLayout";
import { DotBg } from "../../templates/bg/DotBg";
import { useAuth } from "../../../hooks/account/useAuth";

export const SettingPw: FC = () => {
  const { currentUser } = useAuth();

  return (
    <DotBg>
      {currentUser?.uid === `${import.meta.env.VITE_GUEST_USER_ID}` ? (
        <GuestSettingPwLayout title={"パスワードの変更"} />
      ) : (
        <SettingPwLayout title={"パスワードの変更"} />
      )}
    </DotBg>
  );
};
