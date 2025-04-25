const removeFromArray = function() {
    let arr = arguments[0];
    const extraArgument = (Array.from(arguments)).slice(1);
    console.log(extraArgument);
    extraArgument.forEach((index) => {
        arr = arr.filter((element) => element !== index);
    });
    console.log(arr);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
