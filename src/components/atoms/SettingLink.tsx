import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../images/grayArrow.svg";

type Props = {
  label: string;
  link: string;
  children: ReactNode;
};

let theme = {};

export const SettingLink: FC<Props> = (props) => {
  const { label, link, children } = props;

  return (
    <SettingLinkContainer to={link}>
      {label}
      <span>{children}</span>
    </SettingLinkContainer>
  );
};

const SettingLinkContainer = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  height: 40px;
  position: relative;
  padding: 8px 30px 8px 13px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  border-radius: 5px;
  span {
    color: ${(props) => props.theme.colors.gray};
    font-size: 14px;
  }
  ::before {
    content: "";
    width: 8px;
    height: 13px;
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    background-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
