function every(arr, fn) {
  if (Array.isArray(arr) === false) {
    return new Error('The first value is not an array. Please, recheck it!');
  }
  if (typeof fn !== 'function') {
    return new Error('The second value is not a function. Please, recheck it!');
  }

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === false) {
      return false;
    }
  }
  return true;
}

function checkNumber(el) {
  return (el > 5);
}

console.log(every([19, 22, 31, 42, 54], checkNumber));

console.log(every([1, 2, 3, 2, 4], checkNumber));