import { useNavigate } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import { ReturnArrow } from "../../atoms/Icon/ReturnArrow";
import styled from "styled-components";
import { useState } from "react";

type Props = {
  title: string;
};

export const GuestSettingPwLayout = ({ title }: Props) => {
  const navigate = useNavigate();
  const [currentPw, setCurrentPw] = useState<string>("");
  const [newPw, setNewPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");
  // 新しいパスワードが一致しているか
  const [isMatch, setIsMatch] = useState(true);

  const onBlurCheck = (value: string) => {
    if (value === newPw) {
      setIsMatch(true);
    } else {
      setIsMatch(false);
    }
  };

  return (
    <Content>
      <Head>
        <ReturnArrow onClick={() => navigate("/setting")} color={"#161616"} />
        <SettingTitle>{title}</SettingTitle>
        <CompleteButton onClick={() => navigate("/setting")}>
          完了
        </CompleteButton>
      </Head>
      <TextBox>
        <Text>
          ゲストユーザーには
          <br />
          編集権限がありません😭
        </Text>
      </TextBox>
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${({ theme }) => theme.media.desktop`
    height: 100vh;
  `}
`;

const Head = styled.div`
  max-width: 335px;
  margin: 35px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextBox = styled.div`
  width: 340px;
  height: 140px;
  margin: 48px auto;
  display: grid;
  place-content: center;
  border-radius: 10px;
  background-color: rgba(253, 74, 74, 0.6);
`;

const Text = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.white};
`;

const SettingTitle = styled.h1`
  line-height: 1.43;
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: 16px;
`;

const CompleteButton = styled.button`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: 16px;
`;
