import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ReactNode, FC } from "react";
import styled from "styled-components";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  proposalText: string;
  subtext?: string;
  children: ReactNode;
};

export const Popup: FC<Props> = (props) => {
  const { isOpen, onClose, proposalText, subtext, children } = props;

  return (
    <Modal isOpen={isOpen} isCentered onClose={onClose}>
      <ModalOverlay />
      <ModalContent width="250px" height="170px" borderRadius="10px">
        <TxtWrapper>
          <h2>{proposalText}</h2>
          {subtext && <span>{subtext}</span>}
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

const TxtWrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.fontFamily.Noto};
  h2 {
    line-height: 1.42;
    font-size: 14px;
    font-weight: ${(props) => props.theme.fontWeight.medium};
  }
  span {
    margin-top: 5px;
    font-size: 12px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fontFamily.Noto};
  button {
    width: 100%;
    height: 40px;
    font-size: 14px;
    border-top: 1px solid ${(props) => props.theme.colors.lightGray};
    &:first-child {
      color: ${(props) => props.theme.colors.red};
    }
    &:last-child {
      color: ${(props) => props.theme.colors.gray};
    }
  }
`;
