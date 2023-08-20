function filterOddNumbers(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// console.log(filterOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]
//refactoring
function filterNumbers(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
function isOdd(arr) {
    return arr % 2 !== 0;
}

console.log(filterNumbers([1, 2, 3, 4, 5], isOdd)); // Output: [1, 3, 5]
