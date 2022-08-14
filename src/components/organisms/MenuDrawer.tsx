import { Link } from "react-router-dom";
import { useSignOut } from "../../hooks/account/useSignOut";
import { useSignOutPopup } from "../../hooks/popup/useSignOutPopup";
import { SignOutPopup } from "./Auth/SignOutPopup";
import { Drawer, DrawerOverlay, DrawerContent } from "@chakra-ui/react";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MenuDrawer = ({ isOpen, onClose }: Props) => {
  const { SignOut } = useSignOut();
  const { isOpenSignOut, onOpenSignOutPopup, onCloseSignOutPopup } =
    useSignOutPopup();

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent style={DrawerStyle}>
          <MenuList>
            <MenuListItems onClick={onClose}>
              <Link to="/">ファイル</Link>
            </MenuListItems>
            <MenuListItems onClick={onClose}>
              <Link to="/search">検索</Link>
            </MenuListItems>
            <MenuListItems onClick={onClose}>
              <Link to="/setting">アカウント</Link>
            </MenuListItems>
          </MenuList>
          <ContentLogout onClick={() => onOpenSignOutPopup()}>
            ログアウト
          </ContentLogout>
        </DrawerContent>
      </Drawer>
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

const { palette } = ColorTheme;
const { fontWeight, fontFamily } = Font;

const MenuList = styled.ul`
  margin-top: 130px;

  * + * {
    margin-top: 13px;
  }
`;

const MenuListItems = styled.li`
  font-weight: ${fontWeight.bold};
  font-family: ${fontFamily.Noto};
  font-size: 24px;
  line-height: 1.45;
  color: ${palette.blueGreen};
`;

const ContentLogout = styled.h3`
  margin-top: 39px;
  font-weight: ${fontWeight.bold};
  font-family: ${fontFamily.Noto};
  font-size: 20px;
  line-height: 1.45;
  color: ${palette.black};
`;

const DrawerStyle = {
  width: "296px",
  paddingLeft: "65px",
  background: "url(./src/images/menuDrawerBg.svg)",
};
