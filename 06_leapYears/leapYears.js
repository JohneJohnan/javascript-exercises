const leapYears = function (year) {
    if (typeof year !== 'number')
        return "ERROR"
    if (year < 0)
        return "ERROR"
    if (year % 1 !== 0)
        return "ERROR"

    if (year % 400 == 0)
        return true;
    if (year % 100 == 0)
        return false;
    if (year % 4 == 0)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = leapYears;
