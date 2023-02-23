import * as view from "./view.js";
import * as model from "./model.js";

const handlerInput = async function (value) {
  const color = await model.findColor(value);
  const codes = new Map([
    ["hex", color.hex.value],
    ["rgb", color.rgb.value],
    ["hsl", color.hsl.value],
    ["contrast", color.contrast.value],
  ]);

  view.renderColor(`#${value}`);
  view.updateColorCodes(codes);

  const colorScheme = await model.getColorScheme(value);
  const colors = view.displayColorScheme(colorScheme.colors);
};

const handleCopyClick = function (color) {
  navigator.clipboard.writeText(color);
};

const init = function () {
  view.inputHandler(handlerInput);
  view.copyBtnHandler(handleCopyClick);
};

init();
