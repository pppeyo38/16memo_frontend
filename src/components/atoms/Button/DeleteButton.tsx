import styled from "styled-components";
import { ColorTheme } from "../../../style/ColorTheme";
import { Font } from "../../../style/Font";

type Props = {
  onClick: () => void;
};

export const DeleteButton = ({ onClick }: Props) => {
  return <Button onClick={onClick}>削除</Button>;
};

const { palette } = ColorTheme;
const { fontFamily, fontWeight } = Font;

const Button = styled.button`
  line-height: 1.43;
  color: ${palette.red};
  font-size: 16px;
  font-family: ${fontFamily.Noto};
  font-weight: ${fontWeight.bold};
`;
