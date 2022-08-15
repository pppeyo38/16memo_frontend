import { Link } from "react-router-dom";
import { useSignOut } from "../../hooks/account/useSignOut";
import { useSignOutPopup } from "../../hooks/popup/useSignOutPopup";
import { SignOutPopup } from "./Auth/SignOutPopup";
import { Box, DrawerContent } from "@chakra-ui/react";
import styled from "styled-components";

export const PCMenu = () => {
  const { SignOut } = useSignOut();
  const { isOpenSignOut, onOpenSignOutPopup, onCloseSignOutPopup } =
    useSignOutPopup();

  return (
    <>
      <Menu>
        <MenuList>
          <MenuListItems>
            <Link to="/memo/add">メモを作成</Link>
          </MenuListItems>
          <MenuListItems>
            <Link to="/">ファイル</Link>
          </MenuListItems>
          <MenuListItems>
            <Link to="/search">検索</Link>
          </MenuListItems>
          <MenuListItems>
            <Link to="/setting">アカウント</Link>
          </MenuListItems>
          <ContentLogout onClick={() => onOpenSignOutPopup()}>
            ログアウト
          </ContentLogout>
        </MenuList>
      </Menu>
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

const Menu = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  width: calc((100vw - 600px) / 2);
  height: 100vh;
`;

const MenuList = styled.ul`
  max-width: 296px;
  height: 100vh;
  margin: 0 auto;
  padding: 139px 0 0 48px;
  background-image: url(/src/images/menuDrawerBg.svg);
  background-repeat: no-repeat;

  * + * {
    margin-top: 13px;
  }
`;

const MenuListItems = styled.li`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: 24px;
  line-height: 1.45;
  color: ${(props) => props.theme.colors.blueGreen};
`;

const ContentLogout = styled.h3`
  margin-top: 39px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: 20px;
  line-height: 1.45;
  color: ${(props) => props.theme.colors.black};
`;
