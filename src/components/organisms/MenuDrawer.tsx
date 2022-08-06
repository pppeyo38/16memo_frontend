import { Link } from "react-router-dom";
import { Drawer, DrawerOverlay, DrawerContent } from "@chakra-ui/react";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MenuDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent style={DrawerStyle}>
        <MenuList>
          <MenuListItems>
            <Link to="/">メモ</Link>
          </MenuListItems>
          <MenuListItems>
            <Link to="/">検索</Link>
          </MenuListItems>
          <MenuListItems>
            <Link to="/">アカウント</Link>
          </MenuListItems>
        </MenuList>
        <ContentLogout to="/">ログアウト</ContentLogout>
      </DrawerContent>
    </Drawer>
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
  color: ${palette.blueGreen};
`;

const ContentLogout = styled(Link)`
  margin-top: 39px;
  font-weight: ${fontWeight.bold};
  font-family: ${fontFamily.Noto};
  font-size: 20px;
  color: ${palette.blueGreen};
`;

const DrawerStyle = {
  width: "296px",
  paddingLeft: "65px",
  background: "url(./src/images/menuDrawerBg.svg)",
};
