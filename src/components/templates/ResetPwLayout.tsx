import { Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/Button/PrimaryButton";

export const ResetPwlayout = () => {
  const [email, setEmail] = useState("");

  const onChangeMail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  return (
    <GridStyle>
      <Container>
        <Heading>メールアドレスを入力</Heading>
        <Stack spacing={"26px"} w={"340px"} mt={"65px"}>
          <Text>アカウントに登録したメールアドレスを入力してください。</Text>
          <Input
            variant="white"
            size="md"
            style={{ width: "340px" }}
            placeholder="メールアドレスを入力"
            value={email}
            onChange={onChangeMail}
          />
          <PrimaryButton
            disabled={email === ""}
            onClick={() => console.log("送信")}
          >
            送信する
          </PrimaryButton>
        </Stack>
      </Container>
    </GridStyle>
  );
};

const GridStyle = styled.section`
  height: 100%;
  background-color: #f2f2f2;
  background-image: linear-gradient(
      0deg,
      transparent calc(100% - 0.6px),
      #d2d2d2 calc(100% - 0.6px)
    ),
    linear-gradient(
      90deg,
      transparent calc(100% - 0.6px),
      #d2d2d2 calc(100% - 0.6px)
    );
  background-size: 20px 20px;
  background-repeat: repeat;
  background-position: center center;
  overflow: hidden;

  ${({ theme }) => theme.media.desktop`
    width: 600px;
    margin: 0 auto;
  `}
`;

const Container = styled.section`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.Noto};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.Noto};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
