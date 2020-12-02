// Farenheit to celsius
function toFarenheit(c) {
  let temF = (9 * c) / 5 + 32;
  return console.log(temF);
}
//Celsius to farenheit
function toCelsius(f) {
  let temC = (5 * (f - 32)) / 9;
  return console.log(temC);
}

//string checker
function str(str) {
  let firstChar = str.charAt(0);
  let secondChar = str.charAt(1);
  if (firstChar === "S" && secondChar === "c") return console.log(str);
  return console.log("Sc" + str);
}

function evenDigit(digits) {
  let count = 0;
  digits.forEach((digit) => {
    if (digit % 2 === 0) {
      count = count + 1;
    }
  });
  if (count === 0) return console.log("none");
  if (count > 0) return console.log(count);
}

toCelsius(212);
toFarenheit(100);
str("Sello");
evenDigit([1, 3, 5, 9, 4]);
// console.log(5 % 2);
