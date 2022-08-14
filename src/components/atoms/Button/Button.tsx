import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  text: string;
  size: "s" | "m" | "l";
  link: string;
};

type btnStyle = {
  fw: string;
  fs: string;
  width: string;
  height: string;
  bg: string;
  color: string;
  border: string;
};

export const Button: FC<Props> = (props) => {
  const { text, size, link } = props;
  const [style, setStyle] = useState<btnStyle>({} as btnStyle);

  switch (size) {
    case "s":
      setStyle(s);
      break;
    case "m":
      setStyle(m);
      break;
    case "l":
      setStyle(l);
      break;
  }

  return (
    <StyledBtnWrapper>
      <StyledBtn to={link} styleBtn={style}>
        {text}
      </StyledBtn>
    </StyledBtnWrapper>
  );
};

const StyledBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledBtn = styled(Link)<{ styleBtn: btnStyle }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.styleBtn.width};
  height: ${(props) => props.styleBtn.height};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: ${(props) => props.styleBtn.fs};
  font-weight: ${(props) => props.styleBtn.fw};
  color: ${(props) => props.styleBtn.color};
  background-color: ${(props) => props.styleBtn.bg};
  border-radius: 100vh;
  text-decoration: none;
  border: ${(props) => props.styleBtn.border};
`;

const s = {
  fw: "400",
  fs: "16px",
  width: "43%",
  height: "50px",
  bg: "#00A8A6",
  color: "FFF",
  border: "none",
};

const m = {
  fw: "500",
  fs: "14px",
  width: "180px",
  height: "35px",
  bg: "#F2F2F2",
  color: "161616",
  border: "1px solid #16161",
};

const l = {
  fw: "500",
  fs: "16px",
  width: "340px",
  height: "40px",
  bg: "#00A8A6",
  color: "#F2F2F2",
  border: "none",
};
