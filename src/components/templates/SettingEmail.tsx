import { useNavigate } from "react-router-dom";
import { usePutAccount } from "../../hooks/account/usePutAccount";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { FormDelete } from "../atoms/Icon/FormDelete";

type Props = {
  data: string | null | undefined;
};

export const SettingEmail = ({ data }: Props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const { SendPutMail } = usePutAccount();

  const changeValue = (value: string) => {
    setEmail(value);
  };

  const deleteValue = () => setEmail("");

  useEffect(() => {
    if (data !== null && data !== undefined) {
      setEmail(data);
    }
  }, []);

  return (
    <Content>
      <Head>
        <ReturnArrow onClick={() => navigate("/setting")} color={"#161616"} />
        <SettingTitle>メールアドレス</SettingTitle>
        <CompleteButton onClick={() => SendPutMail(email, pw)}>
          完了
        </CompleteButton>
      </Head>
      <InputArea>
        <InputGroup sx={{ width: "340px" }}>
          <Input
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeValue(e.target.value)
            }
            sx={inputStyle}
          />
          <InputRightElement>
            <FormDelete onClick={() => deleteValue()} />
          </InputRightElement>
        </InputGroup>
        <InputGroup sx={{ width: "340px" }}>
          <Input
            type="password"
            value={pw}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPw(e.target.value)
            }
            sx={inputStyle}
          />
        </InputGroup>
      </InputArea>
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${({ theme }) => theme.media.desktop`
    height: 100vh;
  `}
`;

const Head = styled.div`
  max-width: 335px;
  margin: 35px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputArea = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const SettingTitle = styled.h1`
  line-height: 1.43;
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: 16px;
`;

const CompleteButton = styled.button`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-size: 16px;
`;

const inputStyle = {
  width: "340px",
  border: "none",
  background: "white",
};
