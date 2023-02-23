const form = document.querySelector(".form");
const body = document.body;
const inputs = document.querySelectorAll(".input");
const copyBtns = document.querySelectorAll(".copy__btn");
const schemeContainer = document.querySelector(".color-scheme");

export const renderColor = function (color) {
  body.style.backgroundColor = `${color}`;
};

export const inputHandler = function (handler) {
  inputs.forEach((inp) =>
    inp.addEventListener("input", async (e) => {
      let code = inp.value.replaceAll("#", "");

      if (!(code.length === 6)) return;
      handler(code);
    })
  );
};

export const updateColorCodes = function (codes) {
  inputs.forEach((input, i) => {
    const colorCode = input.getAttribute("name");
    input.value = codes.get(colorCode);
    input.style.color = codes.get("contrast");
    input.style.borderBottomColor = codes.get("contrast");
    copyBtns[i].style.fill = codes.get("contrast");
  });
};

export const copyBtnHandler = function (handler) {
  copyBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const color = document.querySelector(`.input__${btn.classList[1]}`);
      handler(color.value);
    })
  );
};

export const displayColorScheme = function (scheme) {
  const values = scheme.map((color) => {
    const div = document.createElement("div");
    div.classList.add("color-preview");
    div.textContent = color.hex.value;
    div.style.backgroundColor = color.rgb.value;
    div.style.color = color.contrast.value;
    return div;
  });

  schemeContainer.innerHTML = "";
  values.forEach((color) =>
    schemeContainer.insertAdjacentElement("beforeend", color)
  );
};
