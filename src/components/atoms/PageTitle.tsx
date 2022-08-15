import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export const PageTitle = ({ children }: Props) => {
  return (
    <TitleWrap>
      <Title>{children}</Title>
    </TitleWrap>
  );
};

const TitleWrap = styled.div`
  width: 340px;
`;

const Title = styled.h1`
  line-height: 1.45;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
`;
