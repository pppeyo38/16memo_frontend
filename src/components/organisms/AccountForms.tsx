import { Stack } from "@chakra-ui/react";
import { SettingLink } from "../atoms/SettingLink";
import { SettingButton } from "../atoms/SettingButton";

export const AccountForms = () => {
  return (
    <Stack spacing={"26px"}>
      <Stack spacing={"14px"}>
        <SettingLink label="ニックネーム" link="/setting/nickname">
          あああ
        </SettingLink>
        <SettingLink label="ユーザー名" link="/setting/username">
          あああ
        </SettingLink>
        <SettingLink label="メール" link="/setting/mail">
          あああ
        </SettingLink>
        <SettingLink label="パスワード" link="/setting/password">
          あああ
        </SettingLink>
      </Stack>
      <Stack spacing={"14px"}>
        <SettingButton
          label="ログアウト"
          link="/setting/nickname"
          textcolor="#161616"
        />
        <SettingButton
          label="ユーザー名"
          link="/setting/username"
          textcolor="#FD4A4A"
        />
      </Stack>
    </Stack>
  );
};
