import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const StrokeButton: FC<Props> = (props) => {
  const { children, onClick } = props;

  return <Button onClick={onClick}>{children}</Button>;
};

const Button = styled.button`
  width: 340px;
  height: 40px;
  border-radius: 100px;
  border: solid 1px ${(props) => props.theme.colors.black};
  font-size: 14px;
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.lightGray};
`;
