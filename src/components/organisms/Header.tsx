import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { MenuDrawer } from "./MenuDrawer";
import styled from "styled-components";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HeaderWrap>
      <HeaderContent>
        <CreateMemoBtn to={"/memo/add"}>
          <img src="/src/images/penIcon.svg" />
        </CreateMemoBtn>
        <ToggleDrawer onClick={isOpen ? onClose : onOpen}>
          <ToggleDrawerBtn isOpen={isOpen}>
            <span></span>
            <span></span>
            <span></span>
          </ToggleDrawerBtn>
        </ToggleDrawer>
        <MenuDrawer isOpen={isOpen} onClose={onClose} />
      </HeaderContent>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 10000;
  position: absolute;
  top: 0;
  right: 15px;
  width: 105px;
  height: 70px;
  border-radius: 0px 0px 5px 5px;
  background-color: #161616;
`;

const HeaderContent = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const CreateMemoBtn = styled(Link)`
  display: grid;
  place-content: center;
  width: 35px;
  height: 35px;
`;

const ToggleDrawer = styled.div`
  width: 30px;
  height: 30px;
`;

const ToggleDrawerBtn = styled.button<{ isOpen: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;

  span {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 24px;
    height: 1.5px;
    border-radius: 3px;
    background: #a2d6d3;
    transition: all 0.4s;

    &:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg)" : "translateY(-7px)"};
    }

    &:nth-child(2) {
      display: ${({ isOpen }) => (isOpen ? "none" : "block")};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg)" : "translateY(7px)"};
    }
  }
`;
