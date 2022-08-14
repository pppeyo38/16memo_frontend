import { useState } from "react";
import Div100vh from "react-div-100vh";
import { Stack } from "@chakra-ui/react";
import styled from "styled-components";
import { IromemoIcon } from "../atoms/Icon/IromemoIcon";
import { MailPwForm } from "../organisms/Auth/MailPwForm";
import { NameForm } from "../organisms/Auth/NameForm";

import { useSignUp } from "../../hooks/useSignUp";

export const SignUpLayout = () => {
  const [isNext, setIsNext] = useState(false);
  const { data, setData, signup } = useSignUp();
  const onClickNext = () => {
    setIsNext(true);
  };
  const onClickSignUp = () => {
    signup();
  };

  return (
    <Div100vh style={GridStyle}>
      <Container>
        <Stack spacing="23px" alignItems="center">
          <IromemoIcon />
          <Heading>アカウントを作成</Heading>
        </Stack>
        {isNext ? (
          <NameForm
            onClickSignUp={onClickSignUp}
            setData={setData}
            data={data}
          />
        ) : (
          <MailPwForm
            onClick={onClickNext}
            setData={setData}
            data={data}
            isPwForget={true}
          />
        )}
      </Container>
    </Div100vh>
  );
};

const GridStyle = {
  backgroundColor: "#F2F2F2",
  backgroundImage:
    "linear-gradient(0deg, transparent calc(100% - 0.6px), #D2D2D2 calc(100% - 0.6px)), linear-gradient(90deg, transparent calc(100% - 0.6px), #D2D2D2 calc(100% - 0.6px))",
  backgroundSize: "20px 20px",
  backgroundRepeat: "repeat",
  backgroundPosition: "center center",
  overflow: "hidden",
};

const Container = styled.section`
  margin-top: 70px;
`;

const Heading = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: 24px;
`;
