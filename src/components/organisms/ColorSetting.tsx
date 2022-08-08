import { useState } from "react";
import { ColorPicker, Input, Select } from "@mantine/core";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { ChevronDown } from "../atoms/Icon/ChevronDown";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import "./ColorSetting.css";
import { HashTag } from "../atoms/Icon/HashTag";

export const ColorSetting = () => {
  // 変換方式
  const conversionData = [
    { value: "rgb", label: "RGB" },
    { value: "cmyk", label: "CMYK" },
    { value: "hsv", label: "HSV" },
  ];
  const [conversion, setConversion] = useState("rgb");

  return (
    <ColorSettingModal>
      <Head>
        <ReturnArrow path={""} color={"#161616"} />
        <CompleteButton>決定</CompleteButton>
      </Head>
      <Content>
        <Input id="inputHex" icon={<HashTag />} />
        <Select
          id="selector"
          rightSection={<ChevronDown />}
          rightSectionWidth={25}
          value={conversion}
          onChange={(e) => e !== null && setConversion(e)}
          data={conversionData}
        />
        <Palettes>
          <ColorPalette color={"#d9d9d9"} />
          <ColorPalette color={"#00A8A6"} />
        </Palettes>
        <ColorPicker format={"hex"} />
      </Content>
    </ColorSettingModal>
  );
};

const { palette } = ColorTheme;
const { fontWeight, fontFamily } = Font;

const ColorSettingModal = styled.section``;

const Head = styled.div`
  max-width: 335px;
  margin: 35px auto 0;
  display: flex;
  justify-content: space-between;
`;

const CompleteButton = styled.button`
  color: ${palette.black};
  font-family: ${fontFamily.Noto};
  font-size: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
`;

const Palettes = styled.div`
  display: flex;
`;

const ColorPalette = styled.div<{ color: string }>`
  width: 105px;
  height: 20px;
  background: ${({ color }) => color};
`;
