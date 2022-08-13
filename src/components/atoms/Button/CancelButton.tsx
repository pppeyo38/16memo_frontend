import styled from "styled-components";
import { ColorTheme } from "../../../style/ColorTheme";
import { Font } from "../../../style/Font";

type Props = {
  onClick: () => void;
};

export const CancelButton = ({ onClick }: Props) => {
  return <Button onClick={onClick}>キャンセル</Button>;
};

const { palette } = ColorTheme;
const { fontFamily } = Font;

const Button = styled.button`
  line-height: 1.43;
  color: ${palette.blueGreen};
  font-size: 16px;
  font-family: ${fontFamily.Noto};
`;
