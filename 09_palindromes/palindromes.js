//trying to not use easy methods
// const palindromes = function (input) {
//     let processed = "";
//     const forLen = input.length;

//     for(let i = 0; i < forLen; i++)  {
//         const charCode = input[i].charCodeAt(0);

//         if (charCode >= 97 && charCode <= 122) //lowerCase letters
//             processed += input[i];

//         else if (charCode >= 65 && charCode <= 90) //upperCase letters
//             processed += String.fromCharCode(charCode + 32); //toLowerCase
//     }

//     const len = processed.length;

//     for (let i = 0; i <= len / 2; i++) {
//         if (processed[i] != processed[len - i -1])
//             return false;
//     }
//     return true;
// }

//using methods
function palindromes(processed) {
    processed = processed.toLowerCase()
        .split("")
        .filter(arg => /[a-z]/.test(arg));

    let reverseProcessed = processed.slice(0) //to pass by value
        .reverse()
        .join("");

    processed = processed.join("");

    return processed === reverseProcessed;
}

// the odin project solution
// const palindromes = function (string) {
//     processedString = string.toLowerCase().replace(/[^a-z]/g, "");
//     return (
//         processedString
//             .split("")
//             .reverse()
//             .join("") == processedString
//     );
// };


// Do not edit below this line
module.exports = palindromes;

/**
 * lowercase
 * delete non-alphabet
 * reverse
 */