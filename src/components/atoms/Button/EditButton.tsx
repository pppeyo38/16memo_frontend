import styled from "styled-components";

type Props = {
  color: string;
  onClick: () => void;
};

export const EditButton = ({ color, onClick }: Props) => {
  return (
    <Button textColor={color} onClick={onClick}>
      編集
    </Button>
  );
};

const Button = styled.button<{ textColor: string }>`
  width: 40px;
  height: 35px;
  color: ${(props) => props.textColor};
  font-size: 16px;
  font-family: ${(props) => props.theme.fontFamily.Noto};
`;
