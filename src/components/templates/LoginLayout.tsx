import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import Div100vh from "react-div-100vh";
import { Stack, Input } from "@chakra-ui/react";
import styled from "styled-components";
import { IromemoIcon } from "../atoms/IromemoIcon";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { Button } from "../atoms/Button";

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
    <Div100vh style={GridStyle}>
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
          <InputHelper to={"/"}>パスワードを忘れた方はこちら</InputHelper>
        </Stack>
        <Stack spacing="13px" alignItems="center" mt="26px">
          <PrimaryButton
            onClick={onClickLogin}
            disabled={data.email === "" || data.password === ""}
          >
            ログイン
          </PrimaryButton>
          <Button text="アカウントを作成" size="m" link="/login" />
        </Stack>
      </Container>
    </Div100vh>
  );
};

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

const InputHelper = styled(Link)`
  margin: 0;
  font-size: 14px;
  color: #9b9b9b;
`;
