import { useNavigate } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import styled from "styled-components";
import { useState } from "react";

export const AccountDeleteLayout = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  return (
    <Content>
      <Head>
        <ReturnArrow onClick={() => navigate("/setting")} color={"#161616"} />
        <SettingTitle>{title}</SettingTitle>
      </Head>
      <InputArea>
        <Input
          type="password"
          placeholder="パスワードを入力"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          sx={inputStyle}
        />
        <DeleteButton>アカウントを削除</DeleteButton>
      </InputArea>
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Head = styled.div`
  position: relative;
  max-width: 335px;
  margin: 35px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: absolute;
    left: 0;
  }
`;

const InputArea = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const SettingTitle = styled.h1`
  line-height: 1.43;
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: 16px;
`;

const DeleteButton = styled.button`
  width: 340px;
  padding: 7px 9px;
  line-height: 1.42;
  color: ${(props) => props.theme.colors.red};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: 14px;
  background-color: ${(props) => props.theme.colors.lightGray};
  border: solid 2px ${(props) => props.theme.colors.red};
  border-radius: 100px;
`;

const inputStyle = {
  width: "340px",
  border: "none",
  background: "white",
};
