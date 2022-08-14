import { Dispatch, FC, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { Stack } from "@chakra-ui/react";
import { DrawerWrap } from "../../molecules/DrawerWrap";
import styled from "styled-components";

type Props = {
  fileName: string;
  isDelete: boolean;
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  onClose: () => void;
};

export const MemosFileDrawer: FC<Props> = (props) => {
  const navigate = useNavigate();
  const { fileName, isDelete, setIsDelete, isOpen, onClose } = props;

  const onClickDelete = () => {
    setIsDelete(!isDelete);
    onClose();
  };

  return (
    <DrawerWrap isOpen={isOpen} onClose={onClose}>
      <DrawerContent>
        <CloseButton onClick={onClose}>
          <span />
          <span />
        </CloseButton>
        <ButtonsWrap>
          <Label>{fileName}</Label>
          <Stack spacing={"14px"}>
            <Button onClick={() => onClickDelete()}>メモを削除</Button>
            <Button onClick={() => navigate(`/${fileName}/edit`)}>
              ファイルの名称変更
            </Button>
          </Stack>
        </ButtonsWrap>
      </DrawerContent>
    </DrawerWrap>
  );
};

const DrawerContent = styled.div`
  position: relative;
  padding: 60px 25px 43px;
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
    background-color: ${(props) => props.theme.colors.black};

    &:nth-child(1) {
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;

const ButtonsWrap = styled.div``;

const Label = styled.h3`
  margin: 0 0 11px 13px;
  line-height: 1.43;
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: 16px;
`;

const Button = styled.button`
  padding: 9px 13px 8px;
  text-align: start;
  line-height: 1.43;
  color: ${(props) => props.theme.colors.black};
  border-radius: 5px;
  background: ${(props) => props.theme.colors.white};
`;
