const sumAll = function(st, end) {
    let sum = 0;
    if (!Number.isInteger(st) || !Number.isInteger(end)) return "ERROR";
    if(st < 0 || end < 0) {
        return 'ERROR';
    }
    if(st > end) {
        let temp = st;
        st = end;
        end = temp;
    }
    for (let index = st; index <= end; index++) {
        sum = sum + index;        
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
