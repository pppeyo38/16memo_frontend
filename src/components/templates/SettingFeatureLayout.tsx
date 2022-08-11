import { useNavigate } from "react-router-dom";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import { useEffect, useState } from "react";
import { FormDelete } from "../atoms/Icon/FormDelete";

type Props = {
  title: string;
  data: string | null | undefined;
};

export const SettingFeatureLayout = ({ title, data }: Props) => {
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
        <CompleteButton>完了</CompleteButton>
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

const { palette } = ColorTheme;
const { fontFamily } = Font;

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
  color: ${palette.black};
  font-family: ${fontFamily.Noto};
  font-size: 16px;
`;

const CompleteButton = styled.button`
  color: ${palette.black};
  font-family: ${fontFamily.Noto};
  font-size: 16px;
`;

const inputStyle = {
  width: "340px",
  border: "none",
  background: "white",
};
