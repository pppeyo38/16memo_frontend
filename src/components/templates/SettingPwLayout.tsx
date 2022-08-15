import { useNavigate } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import { usePutAccount } from "../../hooks/account/usePutAccount";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import styled from "styled-components";
import { useState } from "react";

type Props = {
  title: string;
};

export const SettingPwLayout = ({ title }: Props) => {
  const navigate = useNavigate();
  const { SendPutPw } = usePutAccount();
  const [currentPw, setCurrentPw] = useState<string>("");
  const [newPw, setNewPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");
  // 新しいパスワードが一致しているか
  const [isMatch, setIsMatch] = useState(true);

  const onClick = (newPw: string, currentPw: string) => {
    if (isMatch && newPw && currentPw) {
      SendPutPw(newPw, currentPw);
    } else if (!isMatch) {
      console.log("不一致");
    } else {
      console.log("空");
    }
  };

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
        <CompleteButton onClick={() => onClick(newPw, currentPw)}>
          完了
        </CompleteButton>
      </Head>
      <CurrentPw>
        <Input
          type="password"
          placeholder="現在のパスワード"
          value={currentPw}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentPw(e.target.value)
          }
          sx={inputStyle}
        />
      </CurrentPw>
      <NewPw>
        <Input
          type="password"
          placeholder="新しいパスワード"
          value={newPw}
          isInvalid={!isMatch}
          errorBorderColor="#FD4A4A"
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            onBlurCheck(e.target.value);
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewPw(e.target.value)
          }
          sx={inputStyle}
        />
        <Input
          type="password"
          placeholder="新しいパスワードの確認"
          value={checkPw}
          isInvalid={!isMatch}
          errorBorderColor="#FD4A4A"
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            onBlurCheck(e.target.value);
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCheckPw(e.target.value)
          }
          sx={inputStyle}
        />
        {!isMatch && <AlertUnmatch>パスワードが一致しません</AlertUnmatch>}
      </NewPw>
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

const CurrentPw = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

const NewPw = styled.div`
  margin-top: 26px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 13px;
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

const AlertUnmatch = styled.p`
  width: 340px;
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.Noto};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const inputStyle = {
  width: "340px",
  border: "none",
  background: "white",
};
