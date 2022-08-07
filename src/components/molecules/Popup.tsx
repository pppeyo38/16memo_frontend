import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
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
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const logoutLogic = () => {
    console.log("これは仮で置いてる関数なので自由に消してもらって、、");
  };

  const fileDeleteLogic = () => {
    console.log("これは仮で置いてる関数なので自由に消してもらって、、");
  };

  const memoDeleteLogic = () => {
    console.log("これは仮で置いてる関数なので自由に消してもらって、、");
  };

  // switch (variant) {
  //   case "logout":
  //     mainTxt = "ログアウトしますか？";
  //     subTxt = undefined;
  //     // ↓ここでログアウトのロジックを呼び出す予定です
  //     redBtn = <button onClick={logoutLogic}>ログアウト</button>;
  //     break;
  //   case "fileDelete":
  //     mainTxt = "ファイルを削除しますか？";
  //     subTxt = "ファイル内のメモが全て削除されます。";
  //     // ↓ここでファイル削除のロジックを呼び出す予定です
  //     redBtn = <button onClick={fileDeleteLogic}>削除する</button>;
  //     break;
  //   case "memoDelete":
  //     mainTxt = "メモを削除しますか？";
  //     subTxt = undefined;
  //     // ↓ここでメモ削除のロジックを呼び出す予定です
  //     redBtn = <button onClick={memoDeleteLogic}>削除する</button>;
  //     break;
  // }

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
