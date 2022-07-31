import { useState } from "react";
import Div100vh from "react-div-100vh";
import { Stack } from "@chakra-ui/react";
import styled from "styled-components";
import { Font } from "../../style/Font";
import { IromemoIcon } from "../atoms/IromemoIcon";
import { MailPwForm } from "../organisms/Auth/MailPwForm";
import { NameForm } from "../organisms/Auth/NameForm";

import { useSignUpData } from "../../hooks/useSignUpData";

export const SignUpLayout = () => {
  const [isNext, setIsNext] = useState(false);
  const { data, setData, signup } = useSignUpData();
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

const { fontWeight, fontFamily } = Font;

const GridStyle = {
  backgroundColor: "#F2F2F2",
  backgroundImage:
    "linear-gradient(0deg, transparent calc(100% - 0.4px), #9B9B9B calc(100% - 0.4px)), linear-gradient(90deg, transparent calc(100% - 0.4px), #9B9B9B calc(100% - 0.4px))",
  backgroundSize: "20px 20px",
  backgroundRepeat: "repeat",
  backgroundPosition: "center center",
  overflow: "hidden",
};

const Container = styled.section`
  margin-top: 70px;
`;

const Heading = styled.h1`
  font-family: ${fontFamily.Noto};
  font-weight: ${fontWeight.bold};
  font-size: 24px;
`;
