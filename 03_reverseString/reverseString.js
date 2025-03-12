const reverseString = function(string) {
    let reversedString = "";
    // This is more of a generic approach
    // for (let char=string.length-1; char>=0; char--) {
    //     reversedString += string[char];
    // }

    // This is more of a JS approach
    reversedString = string.split("").reverse().join();
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
