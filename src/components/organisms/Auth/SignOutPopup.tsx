import { ReactNode, FC } from "react";
import { Popup } from "../../molecules/Popup";
import styled from "styled-components";
import { ColorTheme } from "../../../style/ColorTheme";

type Props = {
  children: ReactNode;
  subText?: string;
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
};

export const SignOutPopup: FC<Props> = (props) => {
  const { children, subText, isOpen, onClose, onClick } = props;
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      proposalText={`${children}`}
      subtext={subText}
    >
      <SignOutButton onClick={onClick}>ログアウト</SignOutButton>
    </Popup>
  );
};

const { palette } = ColorTheme;

const SignOutButton = styled.button`
  width: 100%;
  height: 40px;
  display: grid;
  place-content: center;
  border-top: 1px solid ${palette.red};
`;
