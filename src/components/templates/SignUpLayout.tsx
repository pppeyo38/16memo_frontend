import { useState } from "react";
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
    <GridStyle>
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
    </GridStyle>
  );
};

const GridStyle = styled.section`
  height: 100%;
  background-color: #f2f2f2;
  background-image: linear-gradient(
      0deg,
      transparent calc(100% - 0.6px),
      #d2d2d2 calc(100% - 0.6px)
    ),
    linear-gradient(
      90deg,
      transparent calc(100% - 0.6px),
      #d2d2d2 calc(100% - 0.6px)
    );
  background-size: 20px 20px;
  background-repeat: repeat;
  background-position: center center;
  overflow: hidden;

  ${({ theme }) => theme.media.desktop`
    width: 600px;
    margin: 0 auto;
  `}
`;

const Container = styled.section`
  margin-top: 70px;
`;

const Heading = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.Noto};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: 24px;
`;
