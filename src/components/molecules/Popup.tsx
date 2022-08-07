import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ReactNode, FC } from "react";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  proposalText: string;
  children: ReactNode;
};

export const Popup: FC<Props> = (props) => {
  const { isOpen, onClose, proposalText, children } = props;

  return (
    <Modal isOpen={isOpen} isCentered onClose={onClose}>
      <ModalOverlay />
      <ModalContent width="250px" height="170px" borderRadius="10px">
        <TxtWrapper>
          <h2>{proposalText}</h2>
        </TxtWrapper>
        <BtnWrapper>
          {children}
          <ModalCloseButton position="static" width="100%">
            キャンセル
          </ModalCloseButton>
        </BtnWrapper>
      </ModalContent>
    </Modal>
  );
};

const { red, lightGray, gray } = ColorTheme.palette;
const { Noto } = Font.fontFamily;
const { medium } = Font.fontWeight;

const TxtWrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: ${Noto};
  h2 {
    font-size: 14px;
    font-weight: ${medium};
  }
  p {
    font-size: 12px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${Noto};
  button {
    width: 100%;
    height: 40px;
    font-size: 14px;
    border-top: 1px solid ${lightGray};
    &:first-child {
      color: ${red};
    }
    &:last-child {
      color: ${gray};
    }
  }
`;
