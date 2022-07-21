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
  // const { blueGreen, lightGray, white, black } = ColorTheme.palette;
  // const { regular, medium } = Font.fontWeight;

  //style
  // let border:string = "none";
  // let bgColor:string = blueGreen;
  // let width:string = "170px";
  // let height:string = "50px";
  // let color:string = "#fff";
  // let fontSize:string = "14px";
  // let fontWeight:string = "300";

  // switch(size){
  //   case "s":
  //     width = "170px";
  //     height = "50px";
  //     fontSize = "16px";
  //     fontWeight = regular;
  //     border = "none";
  //     bgColor = blueGreen;
  //     color = white;
  //     break;
  //   case "m":
  //     width = "180px";
  //     height = "35px";
  //     fontSize = "14px";
  //     fontWeight = regular;
  //     border = `1px solid ${black}`;
  //     bgColor = lightGray;
  //     color = black;
  //     break;
  //   default : 
  //     width = "340px";
  //     height = "40px";
  //     fontSize = "16px";
  //     fontWeight = medium;
  //     border = "none";
  //     bgColor = blueGreen;
  //     color = white;
  // }

  // const StyledBtn = styled(Link)`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   font-family: 'Noto Sans JP', sans-serif;
  //   font-weight: ${fontWeight};
  //   font-size: ${fontSize};
  //   width: ${width};
  //   height: ${height};
  //   background-color: ${bgColor};
  //   color: ${color};
  //   border: ${border};
  //   border-radius: 100vh;
  //   text-decoration: none;
  // `

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
/* TODO */
`

const largeStyle = css`
/* TODO */
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