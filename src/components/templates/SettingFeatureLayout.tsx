import { useNavigate } from "react-router-dom";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { FormDelete } from "../atoms/Icon/FormDelete";

type Props = {
  title: string;
  data: string | null | undefined;
  onClick: (newData: string) => void;
};

export const SettingFeatureLayout = ({ title, data, onClick }: Props) => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");

  const changeValue = (value: string) => {
    setValue(value);
  };

  const deleteValue = () => setValue("");

  useEffect(() => {
    if (data !== null && data !== undefined) {
      setValue(data);
    }
  }, []);

  return (
    <Content>
      <Head>
        <ReturnArrow onClick={() => navigate("/setting")} color={"#161616"} />
        <SettingTitle>{title}</SettingTitle>
        <CompleteButton onClick={() => onClick(value)}>完了</CompleteButton>
      </Head>
      <InputArea>
        <InputGroup sx={{ width: "340px" }}>
          <Input
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeValue(e.target.value)
            }
            sx={inputStyle}
          />
          <InputRightElement>
            <FormDelete onClick={() => deleteValue()} />
          </InputRightElement>
        </InputGroup>
      </InputArea>
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  justify-content: center;
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
