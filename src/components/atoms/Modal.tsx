import styled from "styled-components";
import { ReactNode, FC, useState } from "react";
import { ColorTheme } from "../../style/ColorTheme";
import exitIcon from "../../images/exitIcon.png";

type Props = {
  children: ReactNode;
}

export const Modal:FC<Props> = (props) => {
  const { black, lightGray } = ColorTheme.palette;
  const { children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const clickExitIcon = () => {
    setIsOpen(!isOpen);
  }

  //???バツ押したらdisplayNoneにしたいけど、、
  const BackgroundModal = styled.div<{isOpen:boolean}>`
    position: fixed;
    top: 48px;
    left: 0px;
    width: 100%;
    height: calc(100vh - 48px);
    /* display: ${props => props.isOpen ? "block" : "none"}; */
    opacity: ${props => props.isOpen ? 1 : 0};
    pointer-events: ${props => props.isOpen ? "all" : "none"};
    background-color: rgba(0,0,0,0.5);
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
    transform: ${props => props.isOpen ? "translateY(0)" : "translateY(100%)"};
    transition: all 0.3s;
  `

  const StyledBtnWrapper = styled.div`
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

  return(
    <>
      <button onClick={clickExitIcon}>modal window</button>
      <BackgroundModal isOpen={isOpen}>
      </BackgroundModal>
        <StyledModalWrapper isOpen={isOpen}>
          <StyledBtnWrapper>
            <button onClick={clickExitIcon}></button>
          </StyledBtnWrapper>
          {children}
        </StyledModalWrapper>
    </>
  )
}
