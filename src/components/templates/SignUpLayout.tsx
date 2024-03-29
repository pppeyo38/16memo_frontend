import { useState } from "react";
import { Stack, Input } from "@chakra-ui/react";
import styled from "styled-components";
import { Data, useSignUp } from "../../hooks/useSignUp";
import { IromemoIcon } from "../atoms/Icon/IromemoIcon";
import { StrokeButton } from "../atoms/Button/StrokeButton";
import { PrimaryButton } from "../atoms/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";

const initialData: Data = {
  email: "",
  password: "",
  nickname: "",
};

export const SignUpLayout = () => {
  const { signup } = useSignUp();
  const [data, setData] = useState<Data>(initialData);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const onChangeData = (type: string, data: string) => {
    setData((prev) => ({
      ...prev,
      [type]: data,
    }));
  };

  return (
    <GridStyle>
      <Container>
        <Stack spacing="23px" alignItems="center">
          <IromemoIcon />
          <Heading>アカウントを作成</Heading>
        </Stack>
        <Stack
          width="fit-content"
          spacing="13px"
          m="13px auto 0"
          position="relative"
        >
          <Input
            type="email"
            variant="white"
            size="md"
            style={{ width: "340px" }}
            placeholder="メールアドレス"
            value={data.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChangeData("email", e.target.value);
            }}
          />
          <Input
            variant="white"
            size="md"
            style={{ width: "340px" }}
            placeholder="パスワード"
            type="password"
            value={data.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChangeData("password", e.target.value);
            }}
            minLength={6}
          />
          <Input
            variant="white"
            size="md"
            style={{ width: "340px" }}
            placeholder="ニックネーム"
            value={data.nickname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChangeData("nickname", e.target.value);
            }}
          />
          {error.length !== 0 && <ErrorMessage>{error}</ErrorMessage>}
        </Stack>
        <Stack spacing="13px" alignItems="center" mt="42px">
          <PrimaryButton
            disabled={
              data.email === "" || data.password === "" || data.nickname === ""
            }
            onClick={() => signup(data, setError)}
          >
            アカウントを作成
          </PrimaryButton>
          <StrokeButton onClick={() => navigate("/login")}>
            ログイン
          </StrokeButton>
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
`;

const ErrorMessage = styled.p`
  position: absolute;
  bottom: -24px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
`;

const Heading = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: 24px;
`;
