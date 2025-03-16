const removeFromArray = function() {
    const args = Array.from(arguments);
    let array = args[0];
    for (let it = 0; it < array.length; it++) {
        for (let elem = 1; elem < args.length; elem++)
        if (array[it] === args[elem]) {
            array.splice(it,1);
            it--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
