import type { FC } from "react";
import { useLoginUser } from "../../hooks/useLoginUser";

type Props = {};

export const Files: FC<Props> = (props) => {
  const { loginUser } = useLoginUser();
  console.log(loginUser);
  return (
    <div>
      {loginUser?.isAdmin ? (
        <p>ログイン中のユーザー :{loginUser.nickname}</p>
      ) : (
        <p>ログインユーザーがいません</p>
      )}
    </div>
  );
};
