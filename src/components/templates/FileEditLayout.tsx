import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { Input } from "@chakra-ui/react";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import { usePutFile } from "../../hooks/files/usePutFile";

type Props = {
  fileName: string;
};

export const FileEditLayout = ({ fileName }: Props) => {
  const navigate = useNavigate();
  const { SendPutFile } = usePutFile();
  const [updateFileName, setUpdateFileName] = useState<string>(fileName);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateFileName(e.target.value);
  };

  return (
    <Content>
      <Inner>
        <FormHead>
          <ReturnArrow
            onClick={() => navigate(`/${fileName}`)}
            color={"#161616"}
          />
        </FormHead>
        <Form>
          <Input
            variant="filled"
            placeholder="ファイル名を入力"
            bg={"white"}
            value={updateFileName}
            onChange={onChangeName}
          />
          <CompleteButton onClick={() => SendPutFile(fileName, updateFileName)}>
            変更する
          </CompleteButton>
        </Form>
      </Inner>
    </Content>
  );
};

const { palette } = ColorTheme;
const { fontFamily } = Font;

const Content = styled.div`
  height: 100vh;
  position: relative;
  background: ${palette.white};
`;

const Inner = styled.div`
  width: 100vw;
  height: 98vh;
  position: absolute;
  bottom: 0;
  padding: 25px 25px 100px;
  background-color: ${palette.lightGray};
  border-radius: 30px 30px 0 0;
`;

const FormHead = styled.div``;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 180px;
  gap: 48px;
`;

const CompleteButton = styled.button`
  width: 170px;
  height: 50px;
  font-size: 16px;
  font-family: ${fontFamily.Noto};
  color: ${palette.white};
  border-radius: 100px;
  background: ${palette.blueGreen};
`;
