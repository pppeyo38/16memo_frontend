import type { FC } from "react";
import { PageTemplate } from "../../templates/PageTemplate";
import { SettingLayout } from "../../templates/SettingLayout";
import { DotBg } from "../../templates/bg/DotBg";

type Props = {};

export const Setting: FC<Props> = (props) => {
  return (
    <PageTemplate>
      <DotBg>
        <SettingLayout />
      </DotBg>
    </PageTemplate>
  );
};
