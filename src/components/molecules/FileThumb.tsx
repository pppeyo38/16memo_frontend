import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
                split={{ width: 100 / mainColors.length, bgColor: mainColor }}
              />
            ))}
          </>
        ) : (
          <BgMainColor split={{ width: 100, bgColor: "fff" }} />
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

const FileThumbContainer = styled.div<{ isDelete: boolean }>`
  display: inline-block;
  overflow-x: visible;
  overflow-y: hidden;
  flex-shrink: 0;
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

const BgMainColor = styled.div<{ split: { width: number; bgColor: string } }>`
  width: ${({ split }) => `${split.width}%`};
  height: 20px;
  background-color: ${({ split }) => `#${split.bgColor}`};
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
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fontFamily.Noto};
`;

const ColorNum = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 14px;
  font-family: ${(props) => props.theme.fontFamily.Roboto};
  span {
    font-family: ${(props) => props.theme.fontFamily.Noto};
  }
`;
