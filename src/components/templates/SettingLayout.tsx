import { PageTitle } from "../atoms/PageTitle";
import styled from "styled-components";
import { AccountForms } from "../organisms/AccountForms";

export const SettingLayout = () => {
  return (
    <ContentInner>
      <PageTitle>アカウント管理</PageTitle>
      <FromsWrap>
        <AccountForms />
      </FromsWrap>
    </ContentInner>
  );
};

const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 95px;

  ${({ theme }) => theme.media.desktop`
    max-width: 600px;
    height: 100vh;
  `}
`;

const FromsWrap = styled.div`
  margin-top: 15px;
`;
