const repeatString = function(string, num) {
    if(num < 0) {
        return 'ERROR';
    }
    let finalString = "";
    for(let i = 0; i < parseInt(num); i++) {
        finalString = finalString.concat(string);
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
