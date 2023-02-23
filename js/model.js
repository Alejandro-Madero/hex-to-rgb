import { fetchColor, fetchColorScheme } from "./helpers.js";
export const findColor = async function (code) {
  const color = await fetchColor(code);
  return color;
};

export const getColorScheme = async function (code) {
  const scheme = await fetchColorScheme(code);
  return scheme;
};
