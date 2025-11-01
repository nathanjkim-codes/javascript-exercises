const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(1, 4)); // 10
console.log(sumAll(4, 1)); // 10
console.log(sumAll(-1, 4)); // ERROR
console.log(sumAll(2.5, 5)); // ERROR

// Do not edit below this line
module.exports = sumAll;
