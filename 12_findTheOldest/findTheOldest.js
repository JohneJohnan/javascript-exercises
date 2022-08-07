const findTheOldest = function (inputArrayOfObjects) {

    //2d array, 1st column: people(unchanged input), 2nd: age
    const ArrOfObjAndAge = inputArrayOfObjects.map(obj => {

        //1d array, contains every key that is a number(years)
        const birthDeathArray = [];

        for (const key in obj) {
            if (typeof obj[key] == "number")
                birthDeathArray.push(obj[key]);
        }

        if (birthDeathArray.length === 0)
            return [obj, "no year(number) found in this object"];

        //person is alive
        if (birthDeathArray.length === 1)
            return [obj, (new Date).getFullYear() - birthDeathArray[0]];

        //person is dead
        if (birthDeathArray.length === 2)
            return [obj, Math.abs(birthDeathArray[1] - birthDeathArray[0])];

        return [obj, "Error"];
    });

    //the row of oldest person
    return ArrOfObjAndAge.reduce((oldest, row) => {

        if (row[1] > oldest[1])
            return row;

        return oldest;

    }, [new Object(), 0])[0];
};

// Do not edit below this line
module.exports = findTheOldest;