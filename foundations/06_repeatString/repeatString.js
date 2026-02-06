const repeatString = function (word, times) {
  if (times < 0) {
    return "ERROR";
  }
  let temp = "";
  for (let index = 0; index < times; index++) {
    temp += word;
  }
  return temp;
};

repeatString();

// Do not edit below this line
module.exports = repeatString;
