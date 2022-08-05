import { ReactNode } from "react";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";

type Props = {
  children: ReactNode;
};

export const PageTitle = ({ children }: Props) => {
  return (
    <TitleWrap>
      <Title>{children}</Title>
      <IconWrap>
        <img src="./src/images/menuIcon.svg" />
      </IconWrap>
    </TitleWrap>
  );
};

const { palette } = ColorTheme;
const { fontWeight, fontFamily } = Font;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 95px;
  margin: 95px 25px 0;
`;

const Title = styled.h1`
  font-weight: ${fontWeight.bold};
  font-family: ${fontFamily.Noto};
  font-size: 24px;
  color: ${palette.black};
`;

const IconWrap = styled.div``;
