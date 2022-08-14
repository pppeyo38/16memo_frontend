import type { FC } from "react";
import { HeaderLayout } from "../../templates/HeaderLayout";
import { SettingLayout } from "../../templates/SettingLayout";
import { DotBg } from "../../../style/DotBg";

type Props = {};

export const Setting: FC<Props> = (props) => {
  return (
    <HeaderLayout>
      <DotBg>
        <SettingLayout />
      </DotBg>
    </HeaderLayout>
  );
};
