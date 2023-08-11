function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

//2
function temperatureConverter(unit) {
    if (unit === "C") {
        return function toCelsius(fahrenheit) {
            return ((fahrenheit - 32) * 5) / 9;
        };
    } else {
        unit === "F";
        return function toFahrenheit(celsius) {
            return (celsius * 9) / 5 + 32;
        };
    }
}
const toCelsius = temperatureConverter("C");
const toFahrenheit = temperatureConverter("F");
console.log(toCelsius(32));
console.log(toFahrenheit(40));

//3
function greet(name) {
    return function (greeting) {
        return `Good ${greeting},${name}`;
    };
}
const greetJohn = greet("John");
console.log(greetJohn("Morning"));

function interestCalculator(rate) {
    return function (amount) {
        return (rate / 100) * amount;
    };
}
const simpleInterest = interestCalculator(5);
console.log(simpleInterest(1000)); // 50

function multiplier(factor) {
    return function (num) {
        return factor * 5;
    };
}
const double = multiplier(2);
console.log(double(5)); // 10

//Medium Problems//
function doubleMultiplier(fact1, fact2) {
    return function (num) {
        return fact1 * fact2 * num;
    };
}
const doubleAndTriple = doubleMultiplier(2, 3);
console.log(doubleAndTriple(5)); // 30

//2
function sequentialGreet(name) {
    return {
        morning: function () {
            return `Good morning,${name}`;
        },
        afternoon: function () {
            return `Good afternoon,${name}`;
        },
        evening: function () {
            return `Good evening,${name}`;
        }
    };
}
const johnGreeting = sequentialGreet("John");
console.log(johnGreeting.morning()); // 'Good Morning, John!'
johnGreeting.evening(); // 'Good Evening, John!'

//3

function personalLibrary() {
    const library = [];
    return {
        add: function (book) {
            library.push(book);
        },
        remove: function (book) {
            library.shift(book);
        },
        list: function () {
            return book;
        }
    };
}
const myLibrary = personalLibrary();
console.log(myLibrary.add("The Nation"));
console.log(myLibrary.list()); // ['The Nation']

//4
function multiplicationTable(num) {
    return function () {
        const table = [];
        for (let i = 1; i <= 10; i++) {
            table.push(num * i);
        }
        return table;
    };
}
const table3 = multiplicationTable(9);
console.log(table3());
//5
function favoriteColorReminder(name, color) {
    return function () {
        return `${name}'s favorite color is ${color}`;
    };
}
const johnsColor = favoriteColorReminder("John", "Blue");
console.log(johnsColor()); // 'John's favorite color is Blue.'
