import { useState } from "react";
import Div100vh from "react-div-100vh";
import { Stack, Input } from "@chakra-ui/react";
import styled from "styled-components";
import { Font } from "../../style/Font";
import { Button } from "../atoms/Button";
import { InputForm } from "../atoms/Input";

export const SignUpLayout = () => {
  const [inputPW, setInputPW] = useState("");
  const [inputMail, setInputMail] = useState("");

  const handleInpuPWChange = (e) => setInputPW(e.target.value);
  const handleInputMailChange = (e) => setInputMail(e.target.value);

  return (
    <Div100vh style={GridStyle}>
      <Container>
        <Stack spacing="13px" alignItems="center">
          <Logo></Logo>
          <Heading>アカウントを作成</Heading>
        </Stack>
        <Stack spacing="13px" alignItems="center" mt="13px">
          <Input
            variant="white"
            size="md"
            style={{ width: "340px" }}
            placeholder="メールアドレス"
            onChange={handleInputMailChange}
          />
          <Input
            variant="white"
            size="md"
            style={{ width: "340px" }}
            placeholder="パスワード"
            onChange={handleInpuPWChange}
          />
        </Stack>
        <Stack spacing="13px" alignItems="center" mt="26px">
          <Button text="次へ" size="l" link="/" />
          <Button text="ログイン" size="m" link="/login" />
        </Stack>
      </Container>
    </Div100vh>
  );
};

const { Noto } = Font.fontFamily;
const { bold } = Font.fontWeight;

const GridStyle = {
  backgroundColor: "#F2F2F2",
  backgroundImage:
    "linear-gradient(0deg, transparent calc(100% - 0.4px), #9B9B9B calc(100% - 0.4px)), linear-gradient(90deg, transparent calc(100% - 0.4px), #9B9B9B calc(100% - 0.4px))",
  backgroundSize: "20px 20px",
  backgroundRepeat: "repeat",
  backgroundPosition: "center center",
  overflow: "hidden",
};

const Container = styled.section`
  margin-top: 70px;
`;

const Logo = styled.div`
  background-color: #d9d9d9;
  width: 180px;
  height: 180px;
`;

const Heading = styled.h1`
  font-family: Noto;
  font-weight: bold;
  font-size: 24px;
`;
