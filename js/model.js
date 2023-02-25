import { fetchColor, fetchColorScheme } from "./helpers.js";

export const findColor = async function (code) {
  const color = await fetchColor(code);
  console.log(color);
  return color;
};

export const getColorScheme = async function (code) {
  const scheme = await fetchColorScheme(code);
  return scheme;
};
