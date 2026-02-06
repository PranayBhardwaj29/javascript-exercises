const reverseString = function(word) {
    const n = word.length;
    let temp = "";
    for (let index = n - 1; index >= 0; index--) {
        temp += word[index];
    }
    return temp;
};

// Do not edit below this line
module.exports = reverseString;
