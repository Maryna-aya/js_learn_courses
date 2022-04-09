function firstFunc(arr, fn) {
  let result = 'New value: ';
  arr.forEach(item => 
    result += fn(item)
  );
  return result.trim();
}

function handler1(el) {
  return el[0].toUpperCase() + el.slice(1);
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
  return el * 10 + ', ';
}
//return el + '0, ';

console.log(firstFunc([10, 20, 30], handler2));

function handler3(el) {
  return `${el.name} is ${el.age}, `;
}

console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

function handler4(el) {
  return [...el].reverse().join('') + ', ';
}

console.log(firstFunc(['abs', '123'], handler4));