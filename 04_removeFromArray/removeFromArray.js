/*const removeFromArray = function (array, ...removeArray) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        let remove = false;
        for (let j = 0; j < removeArray.length; j++) {
            if (array[i] === removeArray[j])
                remove = true;
        }
        if (!remove)
            result.push(array[i]);
    }
    return result;
};*/

const removeFromArray = function (array, ...removeArray) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < removeArray.length; j++) {
            if (array[i] === removeArray[j])
                array.splice(i--, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;