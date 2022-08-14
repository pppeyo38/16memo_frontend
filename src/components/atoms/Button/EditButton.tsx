import styled from "styled-components";

type Props = {
  onClick: () => void;
};

export const EditButton = ({ onClick }: Props) => {
  return <Button onClick={onClick}>編集</Button>;
};

const Button = styled.button`
  width: 40px;
  height: 35px;
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-family: ${(props) => props.theme.fontFamily.Noto};
`;
