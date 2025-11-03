const leapYears = function (year) {
  const isYearDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0;

  if (isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)) {
    return true;
  } else {
    return false;
  }
};

onsole.log(leapYears(2000)); // true
console.log(leapYears(1900)); // false
console.log(leapYears(1984)); // true
console.log(leapYears(1985)); // false
// Do not edit below this line
module.exports = leapYears;
