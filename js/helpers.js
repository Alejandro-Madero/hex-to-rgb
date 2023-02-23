export const fetchColor = async function (code) {
  try {
    const res = await fetch(
      `https://www.thecolorapi.com/id?hex=${code}&mode=monochrome`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const fetchColorScheme = async function (code) {
  try {
    const res = await fetch(
      `https://www.thecolorapi.com/scheme?hex=${code}&mode=complement&count=10`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
