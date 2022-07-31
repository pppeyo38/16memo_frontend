import { FC, Dispatch, SetStateAction } from "react";
import { Stack, Input } from "@chakra-ui/react";
import { Button } from "../../atoms/Button";
import { PrimaryButton } from "../../atoms/PrimaryButton";
import { Data } from "../../../hooks/useSignUp";

type Props = {
  onClickSignUp: () => void;
  setData: Dispatch<SetStateAction<Data>>;
  data: Data;
};

export const NameForm: FC<Props> = (props) => {
  const { onClickSignUp, setData, data } = props;

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setData((prev) => ({ ...prev, nickname: value }));
  };

  const onChangeId = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setData((prev) => ({ ...prev, createdID: value }));
  };

  return (
    <div>
      <Stack width="fit-content" spacing="13px" m="13px auto 0">
        <Input
          variant="white"
          size="md"
          style={{ width: "340px" }}
          placeholder="ニックネーム"
          onChange={onChangeName}
          value={data.nickname}
        />
        <Input
          variant="white"
          size="md"
          style={{ width: "340px" }}
          placeholder="ユーザー名"
          onChange={onChangeId}
          value={data.createdID}
        />
      </Stack>
      <Stack spacing="13px" alignItems="center" mt="26px">
        <PrimaryButton
          onClick={onClickSignUp}
          disabled={data.nickname === "" || data.createdID === ""}
        >
          アカウントを作成
        </PrimaryButton>
        <Button text="ログイン" size="m" link="/login" />
      </Stack>
    </div>
  );
};
