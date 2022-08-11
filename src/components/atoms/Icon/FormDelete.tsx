type Props = {
  onClick: () => void;
};

export const FormDelete = ({ onClick }: Props) => {
  return (
    <button onClick={onClick}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.75 6.25L6.25 18.75M6.25 6.25L18.75 18.75"
          stroke="#161616"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
