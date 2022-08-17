import { useEffect, useState, Dispatch, SetStateAction, FC, memo } from "react";
import { Memo } from "../../types/memo";
import { useColorValues } from "../../hooks/color/useColor";
import { SettingRGB } from "./Color/SettingRGB";
import { SettingCMYK } from "./Color/SettingCMYK";
import { SettingHSV } from "./Color/SettingHSV";
import { useHexToRgb } from "../../hooks/color/useHexToRgb";
import { ColorPicker, Input, Select } from "@mantine/core";
import { CancelArrow } from "../atoms/Icon/CancelArrow";
import { ChevronDown } from "../atoms/Icon/ChevronDown";
import styled from "styled-components";
import "./ColorSetting.css";

type Props = {
  setOpenedModal: Dispatch<SetStateAction<boolean>>;
  currentColor: string;
  setNewMemo: Dispatch<SetStateAction<Memo>>;
};

type ColorValues = {
  hex: string;
  rgb: {
    red: number;
    blue: number;
    green: number;
  };
};

export const ColorSetting: FC<Props> = memo((props) => {
  const { setOpenedModal, currentColor, setNewMemo } = props;
  const { setHextoRGB, setRGBtoHex } = useHexToRgb();
  const { changeHex } = useColorValues();

  const [colorValues, setColorValues] = useState<ColorValues>({
    hex: currentColor,
    rgb: setHextoRGB(currentColor),
  });

  const [hex, setHex] = useState(currentColor);

  const onBlurHex = (value: string) => {
    if (value.length === 1 && value.slice(0, 1) === "#") {
      setHex(colorValues.hex);
      return;
    } else if (value.slice(0, 1) === "#") {
      value = value.slice(1);
    } else if (value === "") {
      setHex(colorValues.hex);
      return;
    }
    const Hex = changeHex(value);
    setColorValues((prev) => ({
      ...prev,
      hex: Hex,
      rgb: setHextoRGB(Hex),
    }));
    setHex(Hex);
  };

  const handleChange = (value: string) => {
    setColorValues((prev) => ({
      ...prev,
      hex: value,
      rgb: setHextoRGB(value),
    }));
    setHex(value);
  };

  useEffect(() => {
    setHex(setRGBtoHex(colorValues.rgb));
  }, [colorValues.rgb]);

  // 変換方式
  const conversionData = [
    { value: "rgb", label: "RGB" },
    { value: "cmyk", label: "CMYK" },
    { value: "hsv", label: "HSV" },
  ];
  const [conversion, setConversion] = useState("rgb");

  return (
    <SettingModal>
      <Head>
        <CancelArrow onClick={() => setOpenedModal(false)} color={"#161616"} />
        <CompleteButton
          onClick={() => {
            setOpenedModal(false);
            setNewMemo((prev) => ({
              ...prev,
              colorCode: colorValues.hex.slice(1),
            }));
          }}
        >
          決定
        </CompleteButton>
      </Head>
      <Content isHsv={conversion === "hsv" ? true : false}>
        <Input
          id="inputHex"
          value={hex}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.target.value.length <= 7 && setHex(e.target.value);
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            onBlurHex(e.target.value);
          }}
        />
        <Select
          id="selector"
          rightSection={<ChevronDown />}
          rightSectionWidth={25}
          value={conversion}
          onChange={(e) => e !== null && setConversion(e)}
          data={conversionData}
        />
        <Palettes>
          <ColorPalette color={currentColor} />
          <ColorPalette color={colorValues.hex} />
        </Palettes>
        <ColorPicker format={"hex"} value={hex} onChange={handleChange} />
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
    </SettingModal>
  );
});

const SettingModal = styled.section`
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  background: white;

  ${({ theme }) => theme.media.desktop`
    width: 600px;
  `}
`;

const Head = styled.div`
  max-width: 335px;
  margin: 35px auto 0;
  display: flex;
  justify-content: space-between;
`;

const CompleteButton = styled.button`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fontFamily.Noto};
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
