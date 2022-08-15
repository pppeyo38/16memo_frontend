import type { FC } from "react";
import { SettingPwLayout } from "../../templates/SettingPwLayout";
import { DotBg } from "../../templates/bg/DotBg";

export const SettingPw: FC = () => {
  return (
    <DotBg>
      <SettingPwLayout title={"パスワードの変更"} />
    </DotBg>
  );
};
