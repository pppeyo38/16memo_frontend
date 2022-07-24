import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import arrow from "../../images/grayArrow.svg";

type Props = {
  label: string;
  content?: string;
  link: string;
}

let theme = {};

export const SettingLink: FC<Props> = (props) => {
  const { label, content, link } = props;

  return(
    <SettingLinkContainer to={link} theme={theme}>
      {label}
      <span>{content}</span>
    </SettingLinkContainer>
  )
}

const { black, gray, white, lightGray } = ColorTheme.palette;
const { Noto } = Font.fontFamily;

const SettingLinkContainer = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  position: relative;
  padding: 8px 30px 8px 13px;
  background-color: ${white};
  color: ${black};
  font-family: ${Noto};
  border-radius: 5px;
  span {
    color: ${gray};
    font-size: 14px;
  }
  ::before {
    content: '';
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
`