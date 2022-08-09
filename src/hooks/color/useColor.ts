import { useState } from "react";

export type ColorValuesType = {
  hex: string;
  rgb: {
    red: number;
    blue: number;
    green: number;
  };
  cmyk: {
    cyan: number;
    magenta: number;
    yellow: number;
    key: number;
  };
  hsv: {
    hue: number;
    saturation: number;
    value: number;
  };
};

export const useColorValues = () => {
  const [colorValues, setColorValues] = useState<ColorValuesType>({
    hex: "ffffff",
    rgb: { red: 255, blue: 255, green: 255 },
    cmyk: {
      cyan: 0,
      magenta: 0,
      yellow: 0,
      key: 0,
    },
    hsv: {
      hue: 0,
      saturation: 0,
      value: 100,
    },
  });

  return { colorValues, setColorValues };
};
