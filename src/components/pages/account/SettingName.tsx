import type { FC } from "react";
import { usePutAccount } from "../../../hooks/account/usePutAccount";
import { SettingFeatureLayout } from "../../templates/SettingFeatureLayout";
import { DotBg } from "../../templates/bg/DotBg";

export const SettingName: FC = () => {
  const { SendPutNickName } = usePutAccount();

  return (
    <DotBg>
      <SettingFeatureLayout
        title={"ニックネーム"}
        data={"TODO: ニックネーム渡す"}
        onClick={SendPutNickName}
      />
    </DotBg>
  );
};
