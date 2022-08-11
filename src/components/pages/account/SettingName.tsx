import type { FC } from "react";
import { SettingFeatureLayout } from "../../templates/SettingFeatureLayout";
import { useLoginUser } from "../../../hooks/useLoginUser";

export const SettingName: FC = () => {
  const { loginUser } = useLoginUser();
  return (
    <SettingFeatureLayout title={"ニックネーム"} data={loginUser?.nickname} />
  );
};
