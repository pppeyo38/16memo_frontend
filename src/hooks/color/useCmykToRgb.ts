type TypeRGB = {
  red: number;
  green: number;
  blue: number;
};

type TypeCMYK = {
  cyan: number;
  magenta: number;
  yellow: number;
  key: number;
};

export const useCmykToRgb = () => {
  // RGB→CMY→CMYK
  const setRGBtoCMYK = (getRGB: TypeRGB) => {
    const rgb = Object.values(getRGB);
    // RGB→CMY
    const cmy = rgb.map((value) => {
      return 1 - value / 255;
    });
    // CMY→CMYK
    const k = Math.min.apply(0, cmy);
    const cmyk =
      k == 1
        ? [0, 0, 0]
        : cmy.map((value) => {
            return Math.round(((value - k) / (1 - k)) * 100);
          });
    cmyk.push(Math.round(k * 100));
    return { cyan: cmyk[0], magenta: cmyk[1], yellow: cmyk[2], key: cmyk[3] };
  };

  // CMYK→CMY→RGB
  const setCMYKtoRGB = (getCMYK: TypeCMYK) => {
    const cmyk = Object.values(getCMYK);
    // CMYK→CMY
    const k = cmyk[3] / 100;
    const cmy = cmyk.slice(0, 3).map((value) => {
      return (value / 100) * (1 - k) + k;
    });
    // CMY→RGB
    const rgb = cmy.map((value) => {
      return Math.round((1 - value) * 255);
    });
    return { red: rgb[0], green: rgb[1], blue: rgb[2] };
  };

  return { setRGBtoCMYK, setCMYKtoRGB };
};
