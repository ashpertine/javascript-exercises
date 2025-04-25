const sumAll = function() {
    if((arguments[0] < 0 || arguments[1] < 0) || 
    (arguments[0] !== Number(arguments[0]) || arguments[1] !== Number(arguments[1])) || 
    (!Number.isInteger(arguments[0]) || !Number.isInteger(arguments[1]))){
        return "ERROR";
    }

    let start = Math.min(arguments[0], arguments[1]);
    let end = Math.max(arguments[0], arguments[1]);
    let sum = 0;
    for(let i = start; i <= end; i++) {
        for(let j = i; j <= i; j++) {
            sum += j;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
