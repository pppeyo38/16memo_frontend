import { Dispatch, SetStateAction, useEffect } from "react";
import { Slider, NumberInput } from "@mantine/core";
import { ColorValuesType } from "../../../hooks/color/useColor";
import styled from "styled-components";
import { useCmykToRgb } from "../../../hooks/color/useCmykToRgb";
import { useHexToRgb } from "../../../hooks/color/useHexToRgb";
import { useHsvToRgb } from "../../../hooks/color/useHsvToRgb";

type Props = {
  colorValues: ColorValuesType;
  setColorValues: Dispatch<SetStateAction<ColorValuesType>>;
};

export const SettingCMYK = ({ colorValues, setColorValues }: Props) => {
  const { setCMYKtoRGB } = useCmykToRgb();
  const { setRGBtoHex } = useHexToRgb();
  const { setRGBtoHSV } = useHsvToRgb();

  const handleChange = (value: number, color: string) => {
    setColorValues((prev) => ({
      ...prev,
      cmyk: { ...prev.cmyk, [color]: value },
    }));
    setColorValues((prev) => ({
      ...prev,
      rgb: setCMYKtoRGB(prev.cmyk),
    }));
  };

  useEffect(() => {
    setColorValues((prev) => ({
      ...prev,
      hex: setRGBtoHex(prev.rgb),
      hsv: setRGBtoHSV(prev.rgb),
    }));
  }, [colorValues.rgb]);

  return (
    <Section>
      <SliderWrap bg={"#00FFF0"}>
        <SliderLabel>C</SliderLabel>
        <Slider
          max={100}
          value={colorValues.cmyk.cyan}
          onChange={(e) => handleChange(e, "cyan")}
          style={SliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={100}
          value={colorValues.cmyk.cyan}
          onChange={(e) => {
            if (e !== undefined) {
              handleChange(e, "cyan");
            }
          }}
        />
      </SliderWrap>
      <SliderWrap bg={"#FF00C7"}>
        <SliderLabel>M</SliderLabel>
        <Slider
          max={100}
          value={colorValues.cmyk.magenta}
          onChange={(e) => handleChange(e, "magenta")}
          style={SliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={100}
          value={colorValues.cmyk.magenta}
          onChange={(e) => {
            if (e !== undefined) {
              handleChange(e, "magenta");
            }
          }}
        />
      </SliderWrap>
      <SliderWrap bg={"#FAFF00"}>
        <SliderLabel>Y</SliderLabel>
        <Slider
          max={100}
          value={colorValues.cmyk.yellow}
          onChange={(e) => handleChange(e, "yellow")}
          style={SliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={100}
          value={colorValues.cmyk.yellow}
          onChange={(e) => {
            if (e !== undefined) {
              handleChange(e, "yellow");
            }
          }}
        />
      </SliderWrap>
      <KeySlider bg={"#99FEE6"}>
        <SliderLabel>K</SliderLabel>
        <Slider
          max={100}
          value={colorValues.cmyk.key}
          onChange={(e) => handleChange(e, "key")}
          style={SliderStyle}
        />
        <NumberInput
          hideControls
          min={0}
          max={100}
          value={colorValues.cmyk.key}
          onChange={(e) => {
            if (e !== undefined) {
              handleChange(e, "key");
            }
          }}
        />
      </KeySlider>
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
  }
`;

const KeySlider = styled.div<{ bg: string }>`
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
      ${({ bg }) => `background: linear-gradient(to right, ${bg}, black)`}
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
