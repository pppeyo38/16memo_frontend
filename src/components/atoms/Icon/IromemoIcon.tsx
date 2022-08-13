import styled from "styled-components";

export const IromemoIcon = () => {
  return (
    <IromemoIconWrap>
      <img src="./src/images/iromemo-logo.svg" alt="イロメモ" />
    </IromemoIconWrap>
  );
};

const IromemoIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;
