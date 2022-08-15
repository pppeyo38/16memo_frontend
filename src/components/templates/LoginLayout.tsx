import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { Stack, Input } from "@chakra-ui/react";
import styled from "styled-components";
import { IromemoIcon } from "../atoms/Icon/IromemoIcon";
import { PrimaryButton } from "../atoms/Button/PrimaryButton";
import { StrokeButton } from "../atoms/Button/StrokeButton";

type Data = {
  email: string;
  password: string;
};

const initialData: Data = {
  email: "",
  password: "",
};

export const LoginLayout = () => {
  const { login } = useLogin();
  const [data, setData] = useState<Data>(initialData);
  const navigate = useNavigate();

  const onChangeMail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setData((prev) => ({ ...prev, email: value }));
  };

  const onChangePw = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setData((prev) => ({ ...prev, password: value }));
  };

  const onClickLogin = () => {
    login(data);
  };

  return (
    <GridStyle>
      <Container>
        <Stack alignItems="center" mb="39px">
          <IromemoIcon />
        </Stack>
        <Stack width="fit-content" spacing="13px" m="13px auto 0">
          <Input
            variant="white"
            size="md"
            style={{ width: "340px" }}
            placeholder="メールアドレス"
            value={data.email}
            onChange={onChangeMail}
          />
          <Input
            variant="white"
            size="md"
            style={{ width: "340px" }}
            placeholder="パスワード"
            type="password"
            value={data.password}
            onChange={onChangePw}
          />
          <InputHelper to={"/password_reset"}>
            パスワードを忘れた方はこちら
          </InputHelper>
        </Stack>
        <Stack spacing="13px" alignItems="center" mt="26px">
          <PrimaryButton
            onClick={onClickLogin}
            disabled={data.email === "" || data.password === ""}
          >
            ログイン
          </PrimaryButton>
          <StrokeButton onClick={() => navigate("/signup")}>
            アカウントを作成
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

const InputHelper = styled(Link)`
  margin: 0;
  font-size: 14px;
  color: #9b9b9b;
`;
