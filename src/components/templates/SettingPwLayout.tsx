import { useNavigate } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import { useState } from "react";

type Props = {
  title: string;
};

export const SettingPwLayout = ({ title }: Props) => {
  const navigate = useNavigate();
  const [currentPw, setCurrentPw] = useState<string>("");
  const [newPw, setNewPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");

  return (
    <Content>
      <Head>
        <ReturnArrow onClick={() => navigate("/setting")} color={"#161616"} />
        <SettingTitle>{title}</SettingTitle>
        <CompleteButton>完了</CompleteButton>
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewPw(e.target.value)
          }
          sx={inputStyle}
        />
        <Input
          type="password"
          placeholder="新しいパスワードの変更"
          value={checkPw}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCheckPw(e.target.value)
          }
          sx={inputStyle}
        />
      </NewPw>
    </Content>
  );
};

const { palette } = ColorTheme;
const { fontFamily } = Font;

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  color: ${palette.black};
  font-family: ${fontFamily.Noto};
  font-size: 16px;
`;

const CompleteButton = styled.button`
  color: ${palette.black};
  font-family: ${fontFamily.Noto};
  font-size: 16px;
`;

const inputStyle = {
  width: "340px",
  border: "none",
  background: "white",
};
