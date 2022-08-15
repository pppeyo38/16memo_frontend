import { FC, Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Input } from "@chakra-ui/react";
import { StrokeButton } from "../../atoms/Button/StrokeButton";
import { PrimaryButton } from "../../atoms/Button/PrimaryButton";
import styled from "styled-components";

import { Data } from "../../../hooks/useSignUp";

type Props = {
  onClick: () => void;
  setData: Dispatch<SetStateAction<Data>>;
  data: Data;
};

export const MailPwForm: FC<Props> = (props) => {
  const { onClick, setData, data } = props;
  const navigate = useNavigate();

  const onChangeMail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setData((prev) => ({ ...prev, email: value }));
  };

  const onChangePw = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setData((prev) => ({ ...prev, password: value }));
  };

  return (
    <div>
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
      </Stack>
      <Stack spacing="13px" alignItems="center" mt="26px">
        <PrimaryButton
          onClick={onClick}
          disabled={data.email === "" || data.password === ""}
        >
          次へ
        </PrimaryButton>
        <StrokeButton onClick={() => navigate("/login")}>ログイン</StrokeButton>
      </Stack>
    </div>
  );
};
