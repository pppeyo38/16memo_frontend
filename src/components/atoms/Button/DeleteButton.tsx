import styled from "styled-components";

type Props = {
  onClick: () => void;
};

export const DeleteButton = ({ onClick }: Props) => {
  return <Button onClick={onClick}>削除</Button>;
};

const Button = styled.button`
  line-height: 1.43;
  color: ${(props) => props.theme.colors.red};
  font-size: 16px;
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
