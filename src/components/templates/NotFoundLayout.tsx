import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ErrorIcon from "../../images/error.svg";

type Props = {
  children: ReactNode;
};

export const NotFoundLayout = ({ children }: Props) => {
  return (
    <Content>
      <Inner>
        <img src={ErrorIcon} />
        <ErrorText>{children}</ErrorText>
        <ToFiles to="/">ファイル画面へ</ToFiles>
      </Inner>
    </Content>
  );
};

const Content = styled.section`
  height: 100%;
  display: grid;
  place-content: center;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

const ErrorText = styled.h3`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  line-height: 1.43;
  font-family: ${({ theme }) => theme.fontFamily.Noto};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

const ToFiles = styled(Link)`
  padding: 13px 45px 14px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  line-height: 1.43;
  font-family: ${({ theme }) => theme.fontFamily.Noto};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.gray};
`;
