import type { FC } from "react";
import { usePutAccount } from "../../../hooks/account/usePutAccount";
import { SettingFeatureLayout } from "../../templates/SettingFeatureLayout";
import { DotBg } from "../../templates/bg/DotBg";

export const SettingId: FC = () => {
  const { SendPutCreatedId } = usePutAccount();

  return (
    <DotBg>
      <SettingFeatureLayout
        title={"ユーザー名"}
        data={"TODO: ID渡す"}
        onClick={SendPutCreatedId}
      />
    </DotBg>
  );
};
