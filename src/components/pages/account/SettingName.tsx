import type { FC } from "react";
import { usePutAccount } from "../../../hooks/account/usePutAccount";
import { SettingFeatureLayout } from "../../templates/SettingFeatureLayout";
import { DotBg } from "../../templates/bg/DotBg";
import { useAccount } from "../../../hooks/account/useAccount";

export const SettingName: FC = () => {
  const { account } = useAccount();
  const { SendPutNickName } = usePutAccount();

  return (
    <DotBg>
      <SettingFeatureLayout
        title={"ニックネーム"}
        data={account.nickname}
        onClick={SendPutNickName}
      />
    </DotBg>
  );
};
