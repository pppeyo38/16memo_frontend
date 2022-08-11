import styled from "styled-components";

type Props = {
  color: string;
  onClick?: () => void;
};

export const LinkIcon = ({ color, onClick }: Props) => {
  return (
    <Link onClick={onClick}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4166 13.5417C10.864 14.1398 11.4347 14.6346 12.0901 14.9927C12.7455 15.3508 13.4703 15.5637 14.2152 15.6171C14.9602 15.6704 15.7079 15.5629 16.4076 15.3019C17.1074 15.0409 17.7428 14.6324 18.2708 14.1042L21.3958 10.9792C22.3445 9.99691 22.8695 8.68127 22.8576 7.31566C22.8458 5.95006 22.298 4.64374 21.3324 3.67807C20.3667 2.71241 19.0604 2.16465 17.6948 2.15278C16.3292 2.14092 15.0135 2.66589 14.0312 3.61463L12.2395 5.39588M14.5833 11.4584C14.136 10.8603 13.5652 10.3655 12.9098 10.0074C12.2544 9.64932 11.5296 9.43638 10.7847 9.38303C10.0398 9.32968 9.29206 9.43716 8.59231 9.69819C7.89256 9.95922 7.25714 10.3677 6.72913 10.8959L3.60413 14.0209C2.65539 15.0032 2.13042 16.3188 2.14229 17.6844C2.15415 19.05 2.70191 20.3563 3.66758 21.322C4.63324 22.2877 5.93956 22.8354 7.30517 22.8473C8.67077 22.8592 9.98641 22.3342 10.9687 21.3855L12.75 19.6042"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

const Link = styled.div`
  width: 30px;
  height: 30px;
`;
