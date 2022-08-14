import { FC, memo, ReactNode } from "react";
import styled from "styled-components";

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

const Button = styled.button<{ disabled: boolean }>`
  width: 340px;
  height: 40px;
  border-radius: 20px;
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.disabled ? "#93D6D5" : props.theme.colors.blueGreen};
`;
