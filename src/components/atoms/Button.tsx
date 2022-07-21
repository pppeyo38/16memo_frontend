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

export const Button: FC<Props> = (props) => {
  const { text, size, link } = props;

	return (
    <Link to={link}>
      <StyledBtn size={size}>
        { text }
      </StyledBtn>
    </Link>
	)
}

const { blueGreen, lightGray, white, black } = ColorTheme.palette;
const { regular, medium } = Font.fontWeight;
const baseStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Noto Sans JP', sans-serif;
  border-radius: 100vh;
  text-decoration: none;
`

const smallStyle = css`
  font-weight: ${regular};
  font-size: 16px;
  width: 170px;
  height: 50px;
  background-color: ${blueGreen};
  color: ${white};
  border: none;
`
const mediumStyle = css`
  font-weight: ${regular};
  font-size: 14px;
  width: 180px;
  height: 35px;
  background-color: ${lightGray};
  color: ${black};
  border: 1px solid ${black};
`

const largeStyle = css`
  font-weight: ${medium};
  font-size: 16px;
  width: 340px;
  height: 40px;
  background-color: ${blueGreen};
  color: ${white};
  border: none;
`

type StyledBtnProps = {
  size : "s" | "m" | "l";
}
const StyledBtn = styled.div<StyledBtnProps>`
  ${baseStyle}

  ${({size}) => size === "s" && smallStyle}
  ${({size}) => size === "m" && mediumStyle}
  ${({size}) => size === "l" && largeStyle}
`