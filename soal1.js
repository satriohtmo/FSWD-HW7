const rumus = require("./formula");

const hasilLuasPersegi = rumus.luasPersegi(4);
console.log(hasilLuasPersegi);

const hasilLuasPersegiPanjang = rumus.luasPersegiPanjang(5, 10);
console.log(hasilLuasPersegiPanjang);

const hasilKelilingPersegi = rumus.kelilingPersegi(5);
console.log(hasilKelilingPersegi);

const hasilKelilingPersegiPanjang = rumus.kelilingPersegiPanjang(4, 10);
console.log(hasilKelilingPersegiPanjang);
