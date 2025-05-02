const findTheOldest = function(obj) {
    let currentAge = 0;
    let nextAge = 0;
    obj = obj.sort((current, next) => {
        if(!current.yearOfDeath) {
            currentAge = (new Date).getFullYear() -  current.yearOfBirth;
        } else {
            currentAge = current.yearOfDeath - current.yearOfBirth; 
        }

        if(!next.yearOfDeath) {
            nextAge = (new Date).getFullYear() - next.yearOfBirth;
        }else {
            nextAge = next.yearOfDeath - next.yearOfBirth;
        }

        if(currentAge < nextAge) {
            return 1;
        } else {
            return -1;
        }
    });

    return obj[0];
};

// Do not edit below this line
module.exports = findTheOldest;
