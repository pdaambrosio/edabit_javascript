function bitwiseAND(n1, n2) {
  return parseInt((n1 & n2).toString());
}

function bitwiseOR(n1, n2) {
  return parseInt((n1 | n2).toString());
}

function bitwiseXOR(n1, n2) {
  return parseInt((n1 ^ n2).toString());
}

console.log(bitwiseAND(7, 12));
console.log(bitwiseOR(7, 12));
console.log(bitwiseXOR(7, 12));
