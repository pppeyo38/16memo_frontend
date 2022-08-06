import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  path: string;
};

export const ReturnArrow = ({ path }: Props) => {
  const navigate = useNavigate();
  const onClickReturn = (returnPath: string) => {
    navigate(returnPath);
  };

  return (
    <Arrow onClick={() => onClickReturn(path)}>
      <img src="./src/images/returnArrow.svg" />
    </Arrow>
  );
};

const Arrow = styled.button`
  width: 35px;
  height: 35px;
`;
