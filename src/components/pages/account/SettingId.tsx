import type { FC } from "react";
import { SettingFeatureLayout } from "../../templates/SettingFeatureLayout";
import { useLoginUser } from "../../../hooks/useLoginUser";

export const SettingId: FC = () => {
  const { loginUser } = useLoginUser();
  return (
    <SettingFeatureLayout title={"ユーザー名"} data={loginUser?.createdID} />
  );
};
