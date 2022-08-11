import { PageTitle } from "../molecules/PageTitle";
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
  max-width: 340px;
  margin: 95px auto 0;
`;

const FromsWrap = styled.div`
  margin-top: 15px;
`;
