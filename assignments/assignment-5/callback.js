function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    return `The result of adding is ${result}.`;
}
function subtractTwoNumbers(num1, num2) {
    let result = num1 - num2;
    return `The result of adding is ${result}.`;
}
function multiplyTwoNumber(num1, num2) {
    let result = num1 * num2;
    return `The result of adding is ${result}.`;
}

function divideTwoNumbers(num1, num2) {
    let result = num1 / num2;
    return `The result of adding is ${result}.`;
}
// refactoring//
function calculate(num1, num2, callback) {
    return callback(num1, num2);
}
function add(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function devide(num1, num2) {
    return num1 / num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
console.log(calculate(6, 3, add));
console.log(calculate(6, 3, multiply));
console.log(calculate(6, 3, devide));
console.log(calculate(6, 3, subtract));
