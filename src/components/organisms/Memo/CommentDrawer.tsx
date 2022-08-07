import { ReactNode } from "react";
import { DrawerWrap } from "../../molecules/DrawerWrap";
import styled from "styled-components";
import { ColorTheme } from "../../../style/ColorTheme";
import { Font } from "../../../style/Font";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const CommentDrawer = ({ isOpen, onClose, children }: Props) => {
  return (
    <DrawerWrap onClose={onClose} isOpen={isOpen}>
      <DrawerContent>
        <CloseButton onClick={onClose}>
          <span />
          <span />
        </CloseButton>
        <Comment>{children}</Comment>
      </DrawerContent>
    </DrawerWrap>
  );
};

const { palette } = ColorTheme;
const { fontWeight, fontFamily } = Font;

const DrawerContent = styled.div`
  position: relative;
  padding: 80px 35px;
`;

const CloseButton = styled.button`
  position: absolute;
  display: grid;
  place-content: center;
  width: 35px;
  height: 35px;
  top: 25px;
  right: 25px;

  span {
    display: block;
    width: 26px;
    height: 1px;
    border-radius: 50%;
    background-color: #161616;

    &:nth-child(1) {
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;

const Comment = styled.p`
  color: ${palette.black};
  font-family: ${fontFamily.Noto};
  font-size: 16px;
  font-weight: ${fontWeight.regular};
`;
