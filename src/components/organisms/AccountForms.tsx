import { useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useSignOut } from "../../hooks/account/useSignOut";
import { useSignOutPopup } from "../../hooks/popup/useSignOutPopup";
import { Stack } from "@chakra-ui/react";
import { SettingLink } from "../atoms/SettingLink";
import { SettingButton } from "../atoms/Button/SettingButton";
import { SignOutPopup } from "./Auth/SignOutPopup";

export const AccountForms = () => {
  const user = auth.currentUser;
  const { loginUser } = useLoginUser();
  const navigate = useNavigate();
  const { SignOut } = useSignOut();
  const { isOpenSignOut, onOpenSignOutPopup, onCloseSignOutPopup } =
    useSignOutPopup();
  console.log("currentUser: " + user);

  return (
    <>
      <Stack spacing={"26px"} align="center">
        <Stack spacing={"14px"} w="fit-content">
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
        <Stack spacing={"14px"} w="fit-content">
          <SettingButton
            label="ログアウト"
            onClick={() => onOpenSignOutPopup()}
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
        isOpen={isOpenSignOut}
        onClose={onCloseSignOutPopup}
        onClick={() => SignOut()}
      >
        ログアウトしますか？
      </SignOutPopup>
    </>
  );
};
