const palindromes = function (string) {
    const ALPHA = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedString = string.toLowerCase()
                      .split('')
                      .filter((element) => ALPHA.includes(element))
                      .join('');
    const reversedString =  [...cleanedString].reverse().join("");
    return cleanedString === reversedString;

};

// Do not edit below this line
module.exports = palindromes;
