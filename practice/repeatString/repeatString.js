// Write a function that takes a string and a number n,
// and returns a new string where each character is repeated n times.

repeatEachChar("abc", 3);
repeatEachChar("hi", 2);
repeatEachChar("go", 0);

function repeatEachChar(str, num) {
  if (num < 0) return "ERROR";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].repeat(num);
  }
  return result;
}
