import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";

type Props = {
  fileId: number;
  name: string;
  colorNum: number;
  mainColors: string[];
  isDelete: boolean;
};

export const FileThumb: FC<Props> = (props) => {
  const { fileId, name, colorNum, mainColors, isDelete } = props;
  const navigate = useNavigate();

  const handleClick = (id: number, name: string) => {
    navigate(`/${name}`, { state: { id: id } });
  };

  return (
    <FileThumbContainer
      isDelete={isDelete}
      onClick={() => !isDelete && handleClick(fileId, name)}
    >
      <MainColorsWrapper>
        {mainColors.length ? (
          <>
            {mainColors.map((mainColor, index) => (
              <BgMainColor
                key={index}
                theme={{ width: 100 / mainColors.length, bgColor: mainColor }}
              />
            ))}
          </>
        ) : (
          <BgMainColor theme={{ width: 100, bgColor: "fff" }} />
        )}
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

const FileThumbContainer = styled.div<{ isDelete: boolean }>`
  display: inline-block;
  overflow: hidden;
  width: 340px;
  height: 60px;
  border-bottom-right-radius: 13px;
  box-shadow: 0px 2px 3px 2px rgba(22, 22, 22, 0.15);
  transform: ${({ isDelete }) => isDelete && "translateX(14px)"};
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
