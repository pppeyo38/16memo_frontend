import { Dispatch, SetStateAction, useEffect } from "react";
import { Slider, NumberInput } from "@mantine/core";
import styled from "styled-components";
import { ColorValuesType } from "../../../hooks/color/useColor";
import { useHexToRgb } from "../../../hooks/color/useHexToRgb";
import { useCmykToRgb } from "../../../hooks/color/useCmykToRgb";
import { useHsvToRgb } from "../../../hooks/color/useHsvToRgb";

type Props = {
  colorValues: ColorValuesType;
  setColorValues: Dispatch<SetStateAction<ColorValuesType>>;
};

export const SettingRGB = ({ colorValues, setColorValues }: Props) => {
  const { setRGBtoHex } = useHexToRgb();

  const handleChange = (value: number, color: string) => {
    setColorValues((prev) => ({
      ...prev,
      rgb: { ...prev.rgb, [color]: value },
    }));
  };

  const onBlurRgb = (value: number, color: string) => {
    if (value > 255) {
      value = 255;
    } else if (value < 0) {
      value = 0;
    }
    setColorValues((prev) => ({
      ...prev,
      hex: setRGBtoHex({ ...prev.rgb, [color]: value }),
      rgb: { ...prev.rgb, [color]: value },
    }));
  };

  return (
    <Section>
      <SliderWrap bg={"#ff0000"}>
        <SliderLabel>R</SliderLabel>
        <Slider
          max={255}
          value={colorValues.rgb.red}
          onChange={(e) => handleChange(e, "red")}
          style={SliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={255}
          value={colorValues.rgb.red}
          onChange={(e) => {
            if (e !== undefined && e <= 255) {
              handleChange(e, "red");
            }
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            if (e.target.value === "") {
              e.target.value = "0";
            }
            onBlurRgb(parseInt(e.target.value), "red");
          }}
        />
      </SliderWrap>
      <SliderWrap bg={"#00ff00"}>
        <SliderLabel>G</SliderLabel>
        <Slider
          max={255}
          value={colorValues.rgb.green}
          onChange={(e) => handleChange(e, "green")}
          style={SliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={255}
          value={colorValues.rgb.green}
          onChange={(e) => {
            if (e !== undefined && e <= 255) {
              handleChange(e, "green");
            }
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            if (e.target.value === "") {
              e.target.value = "0";
            }
            onBlurRgb(parseInt(e.target.value), "green");
          }}
        />
      </SliderWrap>
      <SliderWrap bg={"#0000ff"}>
        <SliderLabel>B</SliderLabel>
        <Slider
          max={255}
          value={colorValues.rgb.blue}
          onChange={(e) => handleChange(e, "blue")}
          style={SliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={255}
          value={colorValues.rgb.blue}
          onChange={(e) => {
            if (e !== undefined && e <= 255) {
              handleChange(e, "blue");
            }
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            if (e.target.value === "") {
              e.target.value = "0";
            }
            onBlurRgb(parseInt(e.target.value), "blue");
          }}
        />
      </SliderWrap>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 210px;
  margin: 15px auto 0;
`;

const SliderWrap = styled.div<{ bg: string }>`
  position: relative;
  width: 210px;
  height: 25px;
  display: flex;

  & .mantine-Slider-root > .mantine-Slider-track > .mantine-Slider-bar {
    display: none;
  }

  & .mantine-Slider-root > .mantine-Slider-track {
    width: 210px;
    height: 25px;

    &:before {
      ${({ bg }) => `background: ${bg}`};
    }
  }

  & .mantine-Slider-root > .mantine-Slider-track > .mantine-Slider-thumb {
    display: inline-block;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    border: solid 3px white;
    background: none;
    box-shadow: 0 0 0 0.5px #9b9b9b, inset 0 0 0 0.5px #9b9b9b;
  }

  & .mantine-Input-wrapper.mantine-NumberInput-wrapper.mantine-12sbrde {
    width: 0;
    margin: 0;
  }
  & .mantine-Input-input.mantine-NumberInput-input.mantine-gqmpge {
    position: absolute;
    top: 0;
    right: -56px;
    width: 45px;
    height: 25px;
    min-height: 25px;
    padding: 3px 9px;
    line-height: 1.18;
  }
`;

const SliderLabel = styled.p`
  position: absolute;
  top: 0;
  left: -35px;
  font-family: Roboto;
`;

const SliderStyle = {
  width: "210px",
  height: "25px",
};
