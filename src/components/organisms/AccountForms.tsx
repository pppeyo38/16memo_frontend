import { useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import { useLoginUser } from "../../hooks/useLoginUser";
import { Stack, useDisclosure } from "@chakra-ui/react";
import { SettingLink } from "../atoms/SettingLink";
import { SettingButton } from "../atoms/Button/SettingButton";
import { SignOutPopup } from "./Auth/SignOutPopup";

export const AccountForms = () => {
  const user = auth.currentUser;
  const { loginUser } = useLoginUser();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack spacing={"26px"}>
        <Stack spacing={"14px"}>
          <SettingLink label="ニックネーム" link="/setting/nickname">
            {loginUser?.nickname}
          </SettingLink>
          <SettingLink label="ユーザー名" link="/setting/username">
            @{loginUser?.createdID}
          </SettingLink>
          <SettingLink label="メール" link="/setting/mail">
            {user?.email}
          </SettingLink>
          <SettingLink label="パスワード" link="/setting/password">
            パスワードの変更
          </SettingLink>
        </Stack>
        <Stack spacing={"14px"}>
          <SettingButton
            label="ログアウト"
            onClick={() => onOpen()}
            textcolor="#161616"
          />
          <SettingButton
            label="アカウント削除"
            onClick={() => navigate("/setting/deactivate")}
            textcolor="#FD4A4A"
          />
        </Stack>
      </Stack>
      <SignOutPopup
        isOpen={isOpen}
        onClose={onClose}
        onClick={() => console.log("ログアウト")}
      >
        ログアウトしますか？
      </SignOutPopup>
    </>
  );
};
