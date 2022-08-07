import { Popup } from "../../molecules/Popup";
import styled from "styled-components";
import { ColorTheme } from "../../../style/ColorTheme";

type Props = {
  isOpenTrash: boolean;
  onClose: () => void;
};

export const TrashPopup = ({ isOpenTrash, onClose }: Props) => {
  return (
    <Popup
      isOpen={isOpenTrash}
      onClose={onClose}
      proposalText={"メモを削除しますか？"}
    >
      <DeleteButton>削除する</DeleteButton>
    </Popup>
  );
};

const { palette } = ColorTheme;

const DeleteButton = styled.button`
  width: 100%;
  height: 40px;
  display: grid;
  place-content: center;
  border-top: 1px solid ${palette.red};
`;
