import type { FC } from "react";
import { AccountDeleteLayout } from "../../templates/AccountDeleteLayout";
import { DotBg } from "../../templates/bg/DotBg";

export const SettingDeactivate: FC = () => {
  return (
    <DotBg>
      <AccountDeleteLayout title={"アカウント削除"} />
    </DotBg>
  );
};
