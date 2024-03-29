const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};

export function getPrimaryColorFromType(type: string) {
  switch (type) {
    case "normal":
      return "#A8A878";
    case "fire":
      return "#F08030";
    case "water":
      return "#6890F0";
    case "electric":
      return "#F8D030";
    case "grass":
      return "#78C850";
    case "ice":
      return "#98D8D8";
    case "fighting":
      return "#C03028";
    case "poison":
      return "#A040A0";
    case "ground":
      return "#E0C068";
    case "flying":
      return "#A890F0";
    case "psychic":
      return "#F85888";
    case "bug":
      return "#A8B820";
    case "rock":
      return "#B8A038";
    case "ghost":
      return "#705898";
    case "dragon":
      return "#7038F8";
    case "dark":
      return "#705848";
    case "steel":
      return "#B8B8D0";
    case "fairy":
      return "#EE99AC";
    default:
      return "#68A090";
  }
}

export function getAccentColorFromType(type: string) {
  return getPrimaryColorFromType(type) + "CC";
}

export function getTextColorFromColor(color: string) {
  const luminance =
    (0.299 * parseInt(color.slice(1, 3), 16) +
      0.587 * parseInt(color.slice(3, 5), 16) +
      0.114 * parseInt(color.slice(5, 7), 16)) /
    255;

  return luminance > 0.5 ? "#000" : "#fff";
}
