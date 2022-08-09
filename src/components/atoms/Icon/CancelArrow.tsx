import styled from "styled-components";

type Props = {
  onClick: () => void;
  color: string;
};

export const CancelArrow = ({ onClick, color }: Props) => {
  return (
    <Arrow onClick={onClick}>
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
