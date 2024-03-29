import styled from "styled-components";
import Iromemo from "/src/images/iromemo-logo.svg";

export const IromemoIcon = () => {
  return (
    <IromemoIconWrap>
      <img src={Iromemo} alt="イロメモ" />
    </IromemoIconWrap>
  );
};

const IromemoIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;
