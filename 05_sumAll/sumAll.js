const sumAll = function(min, max) {
    let sum = 0;
    if (min < 0 || max < 0 || !Number.isFinite(min) || !Number.isFinite(max) 
        || !Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }
    if (min > max) {
        let aux = min;
        min = max;
        max = aux;
    }
    for (let it = min; it <= max; it++) {
        sum += it;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
