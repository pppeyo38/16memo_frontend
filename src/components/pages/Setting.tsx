import type { FC } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";
import { SettingLayout } from "../templates/SettingLayout";

type Props = {};

export const Setting: FC<Props> = (props) => {
  return (
    <HeaderLayout>
      <SettingLayout />
    </HeaderLayout>
  );
};
