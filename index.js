const BASE = 16;

const getKey = (generator, secret) => {
  return BigInt(generator) ** BigInt(secret) % BigInt(p);
};

const p = 559784823609444184073982810118574696524917881053819639836546641442408838587276888219167938595222810044252210024146426427; // big prime number //PUBLIC
const g = 429; // small prime number, should be less than p - 2 //PUBLIC

const a = 546; // big random number //SECRET
const b = 358; // big random number //SECRET

const A = getKey(g, a); //PUBLIC
const B = getKey(g, b); //PUBLIC

const AB = getKey(B, a); //SECRET
const BA = getKey(A, b); //SECRET

console.log("A public", A.toString(BASE));
console.log("B public", B.toString(BASE));

console.log("A secret", AB.toString(BASE));
console.log("b secret", BA.toString(BASE));

console.log("Are secrets equal?", AB.toString(BASE) === BA.toString(BASE));
