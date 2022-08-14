import { FC, ReactNode } from "react";
import { Popup } from "../../molecules/Popup";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  subText?: string;
  isOpenTrash: boolean;
  onClose: () => void;
  onClick: () => void;
};

export const TrashPopup: FC<Props> = (props) => {
  const { children, subText, isOpenTrash, onClose, onClick } = props;
  return (
    <Popup
      isOpen={isOpenTrash}
      onClose={onClose}
      proposalText={`${children}`}
      subtext={subText}
    >
      <DeleteButton onClick={onClick}>削除する</DeleteButton>
    </Popup>
  );
};

const DeleteButton = styled.button`
  width: 100%;
  height: 40px;
  display: grid;
  place-content: center;
  border-top: 1px solid ${(props) => props.theme.colors.red};
`;
