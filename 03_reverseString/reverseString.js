const reverseString = function(string) {
    let arrFromString = string.split("");
    arrFromString = arrFromString.reverse();
    return  arrFromString.join("");
};

// Do not edit below this line
module.exports = reverseString;
