import { FC } from "react";
import styled from "styled-components";
import arrow from "../../../images/grayArrow.svg";

type Props = {
  label: string;
  onClick: () => void;
  textcolor: string;
};

export const SettingButton: FC<Props> = (props) => {
  const { label, onClick, textcolor } = props;

  return (
    <SettingLinkContainer onClick={onClick} textcolor={textcolor}>
      {label}
    </SettingLinkContainer>
  );
};

const SettingLinkContainer = styled.button<{ textcolor: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  position: relative;
  padding: 8px 30px 8px 13px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${({ textcolor }) => textcolor};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  border-radius: 5px;

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
