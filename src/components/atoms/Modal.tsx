import styled from "styled-components";
import { ReactNode, FC, useState, useCallback } from "react";
import { ColorTheme } from "../../style/ColorTheme";

type Props = {
  children: ReactNode;
  OpenModalBtn: ReactNode;
}

export const Modal:FC<Props> = (props) => {
  const { children, OpenModalBtn } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const clickExitIcon = () => {
    setIsOpen(!isOpen);
  }

  return(
    <>
      <div onClick={clickExitIcon}>
        {OpenModalBtn}
      </div>
      <BackgroundModal isOpen={isOpen}>
        <StyledModalWrapper isOpen={isOpen}>
          <StyledExitBtnWrapper>
            <button onClick={clickExitIcon}></button>
          </StyledExitBtnWrapper>
          {children}
        </StyledModalWrapper>
      </BackgroundModal>
    </>
  )
}

const { black, lightGray } = ColorTheme.palette;

const BackgroundModal = styled.div<{isOpen:boolean}>`
  position: fixed;
  top: 48px;
  left: 0px;
  width: 100%;
  height: calc(100vh - 48px);
  opacity: ${props => props.isOpen ? 1 : 0};
  background-color: rgba(0,0,0,0.5);
  pointer-events: ${props => props.isOpen ? "all" : "none"};
  transition: 0.3s;
`

const StyledModalWrapper = styled.div<{isOpen:boolean}>`
  position: fixed;
  bottom: 0px;
  width: calc(100% - 70px);
  padding: 33px 35px 76px 35px;
  background-color: ${lightGray};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  /* アニメーションつけたいなと思って↓ */
  transform: ${props => props.isOpen ? "translateY(0px)" : "translateY(100%)"};
  transition: 0.3s;
  &:hover{
    opacity: 0%;
  }
`

const StyledExitBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 28px;
  button {
    position: relative;
    width: 18px;
    height: 18px;
    padding: 0px;
    border: none;
    &::before, &::after{
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 25px;
      height: 1.5px;
      border-radius: 100vw;
      background-color: ${black};
    }
    &::before {
      transform: translate(-50%,-50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%,-50%) rotate(45deg);
    }
  }
`