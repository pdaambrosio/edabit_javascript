function addUp(num) {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  return result;
}

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));
