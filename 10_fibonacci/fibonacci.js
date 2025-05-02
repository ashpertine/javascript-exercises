const fibonacci = function(number) {
    let num = Number(number);
    if(num == 0) return 0;
    if(num < 0) return "OOPS";

    let seq = [1, 1];
    while(seq.length <= num) {
        let i = seq[seq.length-2] + seq[seq.length-1];
        seq.push(i);
    }

    return seq[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
