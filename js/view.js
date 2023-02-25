const form = document.querySelector(".form");
const body = document.body;
const inputs = document.querySelectorAll(".input");
const copyBtns = document.querySelectorAll(".copy__icon");
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

const updateSvgColor = function (contrast, i) {
  if (!(contrast === "dark")) {
    copyBtns[i].classList.add("copy__icon--light");
  }
  if (contrast === "dark") copyBtns[i].classList.remove("copy__icon--light");
};

export const updateColorCodes = function (codes) {
  const contrast = codes.get("contrast").includes("0") ? "dark" : "light";
  inputs.forEach((input, i) => {
    const colorCode = input.getAttribute("name");
    input.value = codes.get(colorCode);
    if (contrast === "light") {
      input.classList.add("input--light");
      input.classList.remove("input--dark");
    }
    if (contrast === "dark") {
      input.classList.add("input--dark");
      input.classList.remove("input--light");
    }
    updateSvgColor(contrast, i);
  });
};

export const copyBtnHandler = function (handler) {
  copyBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const color = document.querySelector(`.input__${btn.classList[1]}`);
      btn.classList.add("click-animation");
      handler(color.value);
      setTimeout(() => {
        btn.classList.remove("click-animation");
      }, 500);
    })
  );
};

export const displayColorScheme = function (scheme) {
  const values = scheme.map((color) => {
    console.log(color.contrast.value);
    const contrast = color.contrast.value.includes("0") ? "dark" : "light";
    const div = document.createElement("div");
    div.classList.add("color__preview");
    div.classList.add(`color__preview-${contrast}`);
    div.textContent = color.hex.value;
    div.style.backgroundColor = color.rgb.value;
    // div.style.color = color.contrast.value;
    return div;
  });

  schemeContainer.innerHTML = "";
  values.forEach((color) =>
    schemeContainer.insertAdjacentElement("beforeend", color)
  );

  previewClickHandler();
};

const previewClickHandler = function () {
  document.querySelectorAll(".color__preview").forEach((el) =>
    el.addEventListener("click", (e) => {
      el.classList.add("click-animation");
      navigator.clipboard.writeText(e.target.textContent);
      setTimeout(() => {
        el.classList.remove("click-animation");
      }, 500);
    })
  );
};
