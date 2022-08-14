import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostFile } from "../../hooks/files/usePostFIle";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { Input } from "@chakra-ui/react";
import styled from "styled-components";

export const FileAddLayout: FC = () => {
  const navigate = useNavigate();
  const { SendPostFile } = usePostFile();
  const [newFileName, setNewFileName] = useState<string>("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFileName(e.target.value);
  };

  return (
    <Content>
      <Inner>
        <FormHead>
          <ReturnArrow onClick={() => navigate("/")} color={"#161616"} />
        </FormHead>
        <Form>
          <Input
            variant="filled"
            placeholder="ファイル名を入力"
            bg={"white"}
            value={newFileName}
            onChange={onChangeName}
          />
          <CompleteButton onClick={() => SendPostFile(newFileName)}>
            作成する
          </CompleteButton>
        </Form>
      </Inner>
    </Content>
  );
};

const Content = styled.div`
  height: 100vh;
  position: relative;
  background: ${(props) => props.theme.colors.white};
`;

const Inner = styled.div`
  width: 100vw;
  height: 98vh;
  position: absolute;
  bottom: 0;
  padding: 25px 25px 100px;
  background-color: ${(props) => props.theme.colors.lightGray};
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
  font-family: ${(props) => props.theme.fontFamily.Noto};
  color: ${(props) => props.theme.colors.white};
  border-radius: 100px;
  background: ${(props) => props.theme.colors.blueGreen};
`;
