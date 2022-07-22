import { FC } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components"
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";

type Props = {
  text : string;
  size : "s" | "m" | "l";
  link: string;
}

let theme = {};

export const Button: FC<Props> = (props) => {
  const { text, size, link } = props;

  switch(size){
    case "s":
      theme = s;
      break;
    case "m":
      theme = m;
      break;
    case "l":
      theme = l;
      break;
  }

	return (
    <StyledBtnWrapper>
      <StyledBtn to={link} theme={theme}>
        { text }
      </StyledBtn>
    </StyledBtnWrapper>
	)
}

const { blueGreen, lightGray, white, black } = ColorTheme.palette;
const { regular, medium } = Font.fontWeight;
const { Noto } = Font.fontFamily;

const StyledBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const StyledBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  font-family: ${Noto};
  font-size: ${props => props.theme.fs};
  font-weight: ${props => props.theme.fw};
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.bg};
  border-radius: 100vh;
  text-decoration: none;
  border: ${props => props.theme.border};
`

const s = {
  fw: regular,
  fs: "16px",
  width: "43%",
  height: "50px",
  bg: blueGreen,
  color: white,
  border: "none"
};

const m = {
  fw: regular,
  fs: "14px",
  width: "52%",
  height: "35px",
  bg: lightGray,
  color: black,
  border: `1px solid ${black}`
};

const l = {
  fw: medium,
  fs: "16px",
  width: "100%",
  height: "40px",
  bg: blueGreen,
  color: white,
  border: "none"
};