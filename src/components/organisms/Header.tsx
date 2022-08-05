import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  const [isClose, setIsClose] = useState(false);

  return (
    <HeaderWrap>
      <HeaderContent>
        <CreateMemoBtn to={"/"}>
          <img src="./src/images/penIcon.svg" />
        </CreateMemoBtn>
        <ToggleDrawer isClose={isClose}>
          <ToggleDrawerBtn>
            <span></span>
            <span></span>
            <span></span>
          </ToggleDrawerBtn>
        </ToggleDrawer>
      </HeaderContent>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
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

const ToggleDrawer = styled.div<{ isClose: boolean }>`
  width: 30px;
  height: 30px;
`;

const ToggleDrawerBtn = styled.button`
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

    &:nth-child(1) {
      transform: translateY(-7px);
    }

    &:nth-child(3) {
      transform: translateY(7px);
    }
  }
`;
