import styled from "styled-components";

type Props = {
  color: string;
};

export const CommentIcon = ({ color }: Props) => {
  return (
    <Comment>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 2.5H7.5C6.83696 2.5 6.20107 2.76339 5.73223 3.23223C5.26339 3.70107 5 4.33696 5 5V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V10M17.5 2.5L25 10M17.5 2.5V10H25M20 16.25H10M20 21.25H10M12.5 11.25H10"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Comment>
  );
};

const Comment = styled.div`
  width: 30px;
  height: 30px;
`;
