import { FC, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Stack, Input } from "@chakra-ui/react";
import { Button } from "../../atoms/Button";
import { PrimaryButton } from "../../atoms/PrimaryButton";
import styled from "styled-components";

import { Data } from "../../../hooks/useSignUpData";

type Props = {
  isPwForget?: boolean;
  onClickNext: () => void;
  setData: Dispatch<SetStateAction<Data>>;
  data: Data;
};

export const MailPwForm: FC<Props> = (props) => {
  const { isPwForget, onClickNext, setData, data } = props;

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
        {isPwForget && (
          <InputHelper to={"/"}>パスワードを忘れた方はこちら</InputHelper>
        )}
      </Stack>
      <Stack spacing="13px" alignItems="center" mt="26px">
        <PrimaryButton
          onClick={onClickNext}
          disabled={data.email === "" || data.password === ""}
        >
          次へ
        </PrimaryButton>
        <Button text="ログイン" size="m" link="/login" />
      </Stack>
    </div>
  );
};

const InputHelper = styled(Link)`
  margin: 0;
  font-size: 14px;
  color: #9b9b9b;
`;
