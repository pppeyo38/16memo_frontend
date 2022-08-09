import { useEffect, useState } from "react";
import { useColorValues } from "../../hooks/color/useColor";
import { ColorPicker, Input, Select } from "@mantine/core";
import { ReturnArrow } from "../atoms/Icon/ReturnArrow";
import { ChevronDown } from "../atoms/Icon/ChevronDown";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import "./ColorSetting.css";
import { SettingRGB } from "./Color/SettingRGB";
import { SettingCMYK } from "./Color/SettingCMYK";
import { SettingHSV } from "./Color/SettingHSV";
import { useHexToRgb } from "../../hooks/color/useHexToRgb";
import { useCmykToRgb } from "../../hooks/color/useCmykToRgb";
import { useHsvToRgb } from "../../hooks/color/useHsvToRgb";

export const ColorSetting = () => {
  const { colorValues, setColorValues } = useColorValues();
  const { setHextoRGB } = useHexToRgb();
  const { setRGBtoCMYK } = useCmykToRgb();
  const { setRGBtoHSV } = useHsvToRgb();

  const onChangeHex = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorValues((prev) => ({ ...prev, hex: e.target.value }));
    console.log(colorValues.hex.length);

    if (colorValues.hex.length === 7) {
      console.log("6桁！！！！");
      // setColorValues((prev) => ({
      //   ...prev,
      //   rgb: setHextoRGB(prev.hex),
      //   cmyk: setRGBtoCMYK(prev.rgb),
      //   hsv: setRGBtoHSV(prev.rgb),
      // }));
    }
  };

  const handleChange = (value: string) => {
    setColorValues((prev) => ({
      ...prev,
      hex: value,
      rgb: setHextoRGB(value),
    }));
  };

  useEffect(() => {
    setColorValues((prev) => ({
      ...prev,
      cmyk: setRGBtoCMYK(prev.rgb),
      hsv: setRGBtoHSV(prev.rgb),
    }));
  }, [colorValues.hex]);

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
      <Content isHsv={conversion === "hsv" ? true : false}>
        <Input id="inputHex" value={colorValues.hex} onChange={onChangeHex} />
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
          <ColorPalette color={colorValues.hex} />
        </Palettes>
        <ColorPicker
          format={"hex"}
          value={colorValues.hex}
          onChange={handleChange}
        />
      </Content>
      {conversion === "rgb" && (
        <SettingRGB colorValues={colorValues} setColorValues={setColorValues} />
      )}
      {conversion === "cmyk" && (
        <SettingCMYK
          colorValues={colorValues}
          setColorValues={setColorValues}
        />
      )}
      {conversion === "hsv" && (
        <SettingHSV colorValues={colorValues} setColorValues={setColorValues} />
      )}
    </ColorSettingModal>
  );
};

const { palette } = ColorTheme;
const { fontFamily } = Font;

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

const Content = styled.div<{ isHsv: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 25px;

  ${(props) =>
    props.isHsv &&
    `
      & .mantine-ColorPicker-wrapper.mantine-1m6yxe8 > .mantine-ColorPicker-body {
        display: none;
      }
  `}
`;

const Palettes = styled.div`
  display: flex;
`;

const ColorPalette = styled.div<{ color: string }>`
  width: 105px;
  height: 20px;
  background: ${({ color }) => color};
`;
