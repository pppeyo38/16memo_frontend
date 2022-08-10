export type ColorValuesType = {
  hex: string;
  rgb: {
    red: number;
    blue: number;
    green: number;
  };
  // cmyk: {
  //   cyan: number;
  //   magenta: number;
  //   yellow: number;
  //   key: number;
  // };
  // hsv: {
  //   hue: number;
  //   saturation: number;
  //   brightness: number;
  // };
};

export const useColorValues = () => {
  // 「#」なしで渡す
  const changeHex = (hex: string) => {
    // 桁調整
    if (hex.length === 1) {
      hex =
        hex.slice(0, 1) +
        hex.slice(0, 1) +
        hex.slice(0, 1) +
        hex.slice(0, 1) +
        hex.slice(0, 1) +
        hex.slice(0, 1);
    } else if (hex.length === 2) {
      hex = hex + hex + hex;
    } else if (hex.length === 6) {
      return "#" + hex;
    } else {
      hex =
        hex.slice(0, 1) +
        hex.slice(0, 1) +
        hex.slice(1, 2) +
        hex.slice(1, 2) +
        hex.slice(2, 3) +
        hex.slice(2, 3);
    }

    return "#" + hex;
  };

  return { changeHex };
};
