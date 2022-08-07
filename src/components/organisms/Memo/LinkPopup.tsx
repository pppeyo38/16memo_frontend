import { Popup } from "../../molecules/Popup";
import styled from "styled-components";
import { ColorTheme } from "../../../style/ColorTheme";

type Props = {
  url: string;
  isOpenLink: boolean;
  onClose: () => void;
};

export const LinkPopup = ({ url, isOpenLink, onClose }: Props) => {
  return (
    <Popup
      isOpen={isOpenLink}
      onClose={onClose}
      proposalText={"外部サイトに移動しますか？"}
    >
      <LinkButton href={url} target="_blank" rel="noopener noreferrer">
        移動する
      </LinkButton>
    </Popup>
  );
};

const { palette } = ColorTheme;

const LinkButton = styled.a`
  width: 100%;
  height: 40px;
  display: grid;
  place-content: center;
  border-top: 1px solid ${palette.lightGray};
`;