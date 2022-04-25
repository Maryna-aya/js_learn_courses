//Task #1

let sum = (...params) => {
  if (!params.length) return 0;
  return params.reduce((prev, next) => { return prev + next; });
}

console.log(sum(1, 2, 3, 4));
console.log(sum());

//Task #2 

const convertToObject = num => ({
  value: num,
  isOdd: Boolean(num % 2)
});

console.log(convertToObject(5));
console.log(convertToObject(10));