const generateShades = (color, range) => {
  let rgbArr = checkColor(color);
  let lightShadesArrRGB = [];
  let darkShadesArrRGB = [];
  let lightShadesArrHEX = [];
  let darkShadesArrHEX = [];
  if (rgbArr !== null) {
    let [R, G, B] = [...rgbArr];
    let [R_factor, G_factor, B_factor] = [
      (255 - R) / range,
      (255 - G) / range,
      (255 - B) / range,
    ];

    for (let i = 0; i <= range; i++) {
      lightShadesArrRGB.push(
        "rgb(" +
          Math.round(255 - i * R_factor) +
          "," +
          Math.round(255 - i * G_factor) +
          "," +
          Math.round(255 - i * B_factor) +
          ")"
      );
      lightShadesArrHEX.push(
        convertToHex(
          Math.round(255 - i * R_factor),
          Math.round(255 - i * G_factor),
          Math.round(255 - i * B_factor)
        )
      );
    }

    [R_factor, G_factor, B_factor] = [R / range, G / range, B / range];

    for (let i = 1; i <= range; i++) {
      darkShadesArrRGB.push(
        "rgb(" +
          Math.round(R - i * R_factor) +
          "," +
          Math.round(G - i * G_factor) +
          "," +
          Math.round(B - i * B_factor) +
          ")"
      );
      darkShadesArrHEX.push(
        convertToHex(
          Math.round(R - i * R_factor),
          Math.round(G - i * G_factor),
          Math.round(B - i * B_factor)
        )
      );
    }
  }
  return [
    lightShadesArrRGB,
    darkShadesArrRGB,
    lightShadesArrHEX,
    darkShadesArrHEX,
  ];
};

// Color Validation

const checkColor = (color) => {
  const regexTri = /^#([0-9a-f]{3}$)/i;
  const regexHex = /^#([0-9a-f]{6}$)/i;
  const validTri = regexTri.test(color);
  const validHex = regexHex.test(color);

  const inputBox = document.getElementById("color");
  if (validTri) {
    inputBox.classList.remove("wrongColor");
    inputBox.classList.add("rightColor");
    return shortToFullHex(color);
  } else if (validHex) {
    inputBox.classList.remove("wrongColor");
    inputBox.classList.add("rightColor");
    return convertToRGB(color);
  } else {
    inputBox.classList.remove("rightColor");
    inputBox.classList.add("wrongColor");
  }
  console.log("Wrong value");
  return null;
};

// Conveting 3 digit hex to 6 digit hex
const shortToFullHex = (color) => {
  let hexStr =
    "#" + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
  return convertToRGB(hexStr);
};

// Converting a valid hex color to rgb

const convertToRGB = (validColor) => {
  let R = validColor.slice(1, 3);
  let G = validColor.slice(3, 5);
  let B = validColor.slice(5);

  let rgb = [parseInt(R, 16), parseInt(G, 16), parseInt(B, 16)];
  return rgb;
};

// Converting a valid rgb to hex

const convertToHex = (r, g, b) =>
  "#" +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");

export { convertToRGB, checkColor, generateShades };
