import styled from "styled-components";

type Props = {
  onClick: () => void;
};

export const CancelButton = ({ onClick }: Props) => {
  return <Button onClick={onClick}>キャンセル</Button>;
};

const Button = styled.button`
  line-height: 1.43;
  color: ${(props) => props.theme.colors.blueGreen};
  font-size: 16px;
  font-family: ${(props) => props.theme.fontFamily.Noto};
`;
