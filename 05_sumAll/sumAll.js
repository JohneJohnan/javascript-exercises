const sumAll = function (first, last) {
    let sum;
    if (typeof first !== 'number' || typeof last !== 'number')
        sum = 'ERROR'
    else if (first < 0 || last < 0)
        sum = 'ERROR'
    else {
        if (first > last) {
            temp = last;
            last = first;
            first = temp;
        }
        sum = first;
        for (let i = first + 1; i <= last; i++)
            sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
