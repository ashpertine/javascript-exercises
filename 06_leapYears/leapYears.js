const leapYears = function(year) {
    /*
        divisible by 4 - leap year
        an otherwise leap year thats divisible by 100 is not a leap year unless its divisble by 400
    */

    if(year % 4 == 0) {
        if(year % 100 == 0) {
            if(year % 400 == 0) {
                return true;
            }

            return false;
        }else {
            return true;
        }
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
