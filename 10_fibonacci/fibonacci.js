// const fibonacci = function(count) {
//     if (isNaN(count)) return "NaN";
//     if (count < 0) return "OOPS";
//     if (count == 1 || count == 2) return 1;

//     return fibonacci(count - 2) + fibonacci(count - 1);
// };

function fibonacci(count) {
    if (isNaN(count)) return "NaN";
    if (count < 0) return "OOPS";
    if (count == 1 || count == 2) return 1;

    let twoBefore = 1;
    let oneBefore = 1;
    let res = 1;
    let oneBeforeSave;

    for (let i = 3; i <= count; i++) {
        res = twoBefore + oneBefore;
        oneBeforeSave = oneBefore;
        oneBefore = res;
        twoBefore = oneBeforeSave;
    }

    return res;
}

// Do not edit below this line
module.exports = fibonacci;
