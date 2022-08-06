import { ReactNode } from "react";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";

type Props = {
  children: ReactNode;
};

export const PageTitle = ({ children }: Props) => {
  const onClick = () => {
    // クリックしたときの挙動をここに書く
    console.log("メニューアイコンクリック");
  };

  return (
    <TitleWrap>
      <Title>{children}</Title>
      <MenuButton onClick={onClick}>
        <img src="./src/images/menuIcon.svg" />
      </MenuButton>
    </TitleWrap>
  );
};

const { palette } = ColorTheme;
const { fontWeight, fontFamily } = Font;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-weight: ${fontWeight.bold};
  font-family: ${fontFamily.Noto};
  font-size: 24px;
  color: ${palette.black};
`;

const MenuButton = styled.button``;
