type TypeRGB = {
  red: number;
  green: number;
  blue: number;
};

type TypeHSV = {
  hue: number;
  saturation: number;
  value: number;
};

export const useHsvToRgb = () => {
  // RGB→HSV
  const setRGBtoHSV = (getRGB: TypeRGB) => {
    let r = getRGB["red"] / 255;
    let g = getRGB["green"] / 255;
    let b = getRGB["blue"] / 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let diff = max - min;
    let h = 0;

    switch (min) {
      case max:
        h = 0;
        break;
      case r:
        h = 60 * ((b - g) / diff) + 180;
        break;
      case g:
        h = 60 * ((r - b) / diff) + 300;
        break;
      case b:
        h = 60 * ((g - r) / diff) + 60;
        break;
    }

    let s = max === 0 ? 0 : diff / max;
    let v = max;

    return { hue: h, saturation: s, value: v };
  };

  // HSV→RGB
  const setHSVtoRGB = (getHSV: TypeHSV) => {
    let C = getHSV["value"] * getHSV["saturation"];
    let Hp = getHSV["hue"] / 60;
    let X = C * (1 - Math.abs((Hp % 2) - 1));

    let R, G, B;
    if (0 <= Hp && Hp < 1) {
      [R, G, B] = [C, X, 0];
    } else if (1 <= Hp && Hp < 2) {
      [R, G, B] = [X, C, 0];
    } else if (2 <= Hp && Hp < 3) {
      [R, G, B] = [0, C, X];
    } else if (3 <= Hp && Hp < 4) {
      [R, G, B] = [0, X, C];
    } else if (4 <= Hp && Hp < 5) {
      [R, G, B] = [X, 0, C];
    } else if (5 <= Hp && Hp < 6) {
      [R, G, B] = [C, 0, X];
    } else {
      [R, G, B] = [0, 0, 0];
    }

    let m = getHSV["value"] - C;
    [R, G, B] = [R + m, G + m, B + m];

    R = Math.floor(R * 255);
    G = Math.floor(G * 255);
    B = Math.floor(B * 255);

    return { red: R, green: G, blue: B };
  };

  return { setRGBtoHSV, setHSVtoRGB };
};
