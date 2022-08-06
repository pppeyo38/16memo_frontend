import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import styled from "styled-components";

export const EditButton = () => {
  return <Button>編集</Button>;
};

const { palette } = ColorTheme;
const { fontFamily } = Font;

const Button = styled.button`
  width: 40px;
  height: 35px;
  color: ${palette.white};
  font-size: 16px;
  font-family: ${fontFamily.Noto};
`;
