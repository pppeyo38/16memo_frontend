import type { FC } from "react";
import { usePutAccount } from "../../../hooks/account/usePutAccount";
import { SettingFeatureLayout } from "../../templates/SettingFeatureLayout";
import { DotBg } from "../../templates/bg/DotBg";
import { useAccount } from "../../../hooks/account/useAccount";

export const SettingId: FC = () => {
  const { account } = useAccount();
  const { SendPutCreatedId } = usePutAccount();

  return (
    <DotBg>
      <SettingFeatureLayout
        title={"ユーザー名"}
        data={account.createdID}
        onClick={SendPutCreatedId}
      />
    </DotBg>
  );
};
