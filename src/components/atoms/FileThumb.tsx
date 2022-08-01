import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";

type Props = {
  name: string;
  colorNum: number;
  mainColors: string[];
};

export const FileThumb: FC<Props> = (props) => {
  const { name, colorNum, mainColors } = props;

  return (
    <FileThumbContainer to={`/${name}`}>
      <MainColorsWrapper>
        {mainColors.map((mainColor, index) => (
          <BgMainColor
            key={index}
            theme={{ width: 100 / mainColors.length, bgColor: mainColor }}
          ></BgMainColor>
        ))}
      </MainColorsWrapper>
      <FileTextWrapper>
        <FileTitle>{name}</FileTitle>
        <ColorNum>
          {colorNum}
          <span>色</span>
        </ColorNum>
      </FileTextWrapper>
    </FileThumbContainer>
  );
};

const { black, gray } = ColorTheme.palette;
const { Roboto, Noto } = Font.fontFamily;

const FileThumbContainer = styled(Link)`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 60px;
  border-bottom-right-radius: 13px;
  box-shadow: 0px 2px 3px 2px rgba(22, 22, 22, 0.15);
`;

const MainColorsWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BgMainColor = styled.div`
  width: ${({ theme }) => `${theme.width}%`};
  height: 20px;
  background-color: ${({ theme }) => `#${theme.bgColor}`};
`;

const FileTextWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px;
  background-color: #fff;
  box-sizing: border-box;
`;

const FileTitle = styled.h2`
  color: ${black};
  font-family: ${Noto};
`;

const ColorNum = styled.p`
  color: ${gray};
  font-size: 14px;
  font-family: ${Roboto};
  span {
    font-family: ${Noto};
  }
`;
