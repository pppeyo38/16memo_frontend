import { FC, memo, ReactNode } from "react";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";

type Props = {
  children: ReactNode;
  disabled: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, disabled, onClick } = props;

  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
});

const { palette } = ColorTheme;
const { fontWeight, fontFamily } = Font;

const Button = styled.button<{ disabled: boolean }>`
  width: 340px;
  height: 40px;
  border-radius: 20px;
  font-family: ${fontFamily.Noto};
  font-weight: ${fontWeight.bold};
  color: ${palette.white};
  background-color: ${({ disabled }) =>
    disabled ? "#93D6D5" : `${palette.blueGreen}`};
`;
