import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type FileInfo = {
  id: number;
  name: string;
};

type MemoContent = {
  id: number;
  colorCode: string;
  tagName: string;
  comment: string;
  url: string;
  createdAt: string;
  fileInfo: FileInfo;
};

type Props = {
  id?: number;
  state?: MemoContent;
  path: string;
  color: string;
};

export const ReturnArrow = ({ id, state, path, color }: Props) => {
  const navigate = useNavigate();
  const onClickReturn = (returnPath: string) => {
    if (id === undefined) {
      navigate(returnPath, { state: state });
    } else {
      navigate(returnPath, { state: { id: id } });
    }
  };

  return (
    <Arrow onClick={() => onClickReturn(path)}>
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.4728 24.1938L15.7936 17.5L22.4728 10.8062L20.4165 8.75L11.6665 17.5L20.4165 26.25L22.4728 24.1938Z"
          fill={color}
        />
      </svg>
    </Arrow>
  );
};

const Arrow = styled.button`
  width: 35px;
  height: 35px;
`;
