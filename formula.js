let luasPersegi = (a) => {
  return a * a;
};

let luasPersegiPanjang = (a, b) => {
  return a * b;
};

let kelilingPersegi = (a) => {
  return 4 * a;
};

let kelilingPersegiPanjang = (a, b) => {
  return 2 * (a + b);
};

module.exports = {
  luasPersegi,
  luasPersegiPanjang,
  kelilingPersegi,
  kelilingPersegiPanjang,
};
